import { ModulesWrap, ModuleItem } from './components/Module';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export function Modules() {
  const { state } = useLocation();
  const { loading } = useSelector(state => state.course);

  return (
    <ModulesWrap>
      {/* {loading ? (
        <LoadingIndicator />
      ) : (
        modules.map(mod => (
          <ModuleItem>
            <span>{mod.title}</span>
          </ModuleItem>
        ))
      )} */}
    </ModulesWrap>
  );
}
