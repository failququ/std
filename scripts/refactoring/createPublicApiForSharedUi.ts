import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentDirs = sharedUiDirectory?.getDirectories();

function isAbsolutePath(value: string) {
  const layers = ['entities', 'features', 'pages', 'shared', 'widgets', 'app'];
  return layers.some((layer) => value.startsWith(layer));
}

componentDirs?.forEach((dir) => {
  const indexFilePath = `${dir.getPath()}/index.ts`;
  const indexFile = project.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${dir.getBaseName()}';`;
    const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

    file.save();
  }
});

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((declaration) => {
    const importPath = declaration.getModuleSpecifierValue();
    const importWithoutAlias = importPath.replace('@/', '');

    const segments = importWithoutAlias.split('/');

    const isSharedLayer = segments[0] === 'shared';
    const isUiLayer = segments[1] === 'ui';

    if (!isSharedLayer || !isUiLayer) {
      return;
    }

    if (isAbsolutePath(importWithoutAlias) && isSharedLayer && isUiLayer) {
      const result = importWithoutAlias.split('/').slice(0, 3).join('/');
      declaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
