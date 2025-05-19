import { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    name: 'remove-react-props',
    visitor: {
      Program(path, state) {
        const propsToExclude = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (propsToExclude.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
