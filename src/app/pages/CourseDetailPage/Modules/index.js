import * as React from 'react';
import { ModulesWrap, ModuleItem, Module } from './Module';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { useSelector, useDispatch } from 'react-redux';
import { selectModules, selectPlayer } from '../slice/selectors';
import { useCourseSlice } from '../slice';
import { Player } from './Player';

import styled from 'styled-components/macro';

export function Modules() {
  const [selected, setSelected] = React.useState('');
  const modules = useSelector(selectModules);
  const player = useSelector(selectPlayer);
  const dispatch = useDispatch();
  const { actions } = useCourseSlice();

  const handleModule = id => {
    setSelected(id);
    dispatch(actions.fetchModule(id));
  };

  return (
    <>
      <ModulesWrap>
        {modules ? (
          modules.map(mod => (
            <ModuleItem key={mod.id}>
              <Module
                className={selected === mod.id && 'selected'}
                onClick={e => handleModule(mod.id)}
              >
                {mod.title}
              </Module>
            </ModuleItem>
          ))
        ) : (
          <Wrap>
            <LoadingIndicator />
          </Wrap>
        )}
      </ModulesWrap>
      {player && <Player player={player} />}
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
