import * as React from 'react';
import { ModulesWrap, ModuleItem, Module } from './Module';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { useSelector } from 'react-redux';
import { selectModules } from '../slice/selectors';

export function Modules() {
  const modules = useSelector(selectModules);

  return (
    <ModulesWrap>
      {modules ? (
        modules.map(mod => (
          <ModuleItem key={mod.id}>
            <Module>{mod.title}</Module>
          </ModuleItem>
        ))
      ) : (
        <LoadingIndicator />
      )}
    </ModulesWrap>
  );
}
