//angular front-end
var listaContatos = angular.module('listaContatos', []);

//carrega
listaContatos.controller('mainController', function($scope, $http){
    
    data = new Date();

    //dados para o site
    $scope.dados = {
        "autor": "Pedro Franco",
        "copyright": "@" + data.getFullYear() + " todos os direitos reservados.",
        "nomeSite": "FrancoDev",
    };
    
    $scope.skills = {
        
        classe: "col-sm-2",
        
       web: [           
            {src: "img/icons/html"},
            {src: "img/icons/css"},
            {src: "img/icons/bootstrap"},
            {src: "img/icons/mysql"},
            {src: "img/icons/javascript"},
            {src: "img/icons/jquery"},
            {src: "img/icons/angular"},
            {src: "img/icons/php"},
       ],
        academica: [
            {src: "img/icons/c"},
            {src: "img/icons/csharp"},
            {src: "img/icons/java"}
        ],
        so: [
            {src: "img/icons/linux"},
            {src: "img/icons/windows"}
        ],
        metodologias: [
            {src: "img/icons/scrum"},
            {src: "img/icons/mvc"}
        ],
        versionamento: [
            {src: "img/icons/git"}
        ],
        
    };

    /*var refresh = function(){
        $http.get('/contatos')
        .success(function(data){
            $scope.contatos = data;
            $scope.formContato = {};
            console.log("contatos:" + data);
        })
        .error(function(data){
            console.log('Error:' + data);
        });
    };
    refresh();

    //criar
    $scope.criarContato = function(){
        $http.post('/contatos', $scope.formContato)
        .success(function(data){
            $scope.formContato = {};
            $scope.contatos = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error: '+ data);
        });
    };

    //deletar
    $scope.deletarContato = function(id){
        $http.delete('/' + id)
        .success(function(data){
            $scope.contatos = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error:' + data);
        });
    };

    //editar
    $scope.editarContato = function(id){
        $http.get('/' + id)
        .success(function(data){
            $scope.formContato = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error:' + data);
        });
    };

    //recebe json do contato para edicao e atualiza
    $scope.atualizarContato = function(){
        $http.put('/' + $scope.formContato._id, $scope.formContato)
        .success(function(response){
            refresh();
        });
    };*/
});