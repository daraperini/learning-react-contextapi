import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhoProvider>
          <PagamentoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
            <Route path="/carrinho">
              <Carrinho />
            </Route>
            </PagamentoProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

// VERSÃO 6 DO REACT ROUTER

// import { createBrowserRoute, RouterProvider } from 'react-router-dom;

// function Router() {

//   const router = createBrowserRouter( [
//     {
//       path:"/" ,
//       element:<Login />
//     },
//     {
//       path:'feira',
//       element: <Feira/>
//     },
//     {
//       path: 'carrinho',
//       element: <Carrinho/>
//     }

//   ])

//   return (
//     <BrowserRouter>
//       <UsuarioProvider> //OS CONTEXTOS FICAM POR FORA DAS ROTAS, DISPONÍVEIS PARA TODAS AS ROTAS, E SÃO RENDERIZADOS E UTILIZADOS APENAS NOS COMPONENTES QUE CHAMAM O CONTEXTO USANDO useContext(CONTEXTO)
//         <CarrinhoProvider>
//           <RouterProvider router={router}/>
//         </CarrinhoProvider>
//       </UsuarioProvider>
//     </BrowserRouter>
//   );
// }

// export default Router;
