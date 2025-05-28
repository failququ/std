import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');

const files = project.getSourceFiles();

function isAbsolutePath(value: string) {
  const layers = ['entities', 'features', 'pages', 'shared', 'widgets', 'app'];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((declaration) => {
    const importPath = declaration.getModuleSpecifierValue();

    if (isAbsolutePath(importPath)) {
      declaration.setModuleSpecifier(`@/${importPath}`);
    }
  });
});

project.save();
