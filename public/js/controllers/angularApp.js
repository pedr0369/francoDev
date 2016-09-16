var listaContatos = angular.module('listaContatos', []);

//carrega
listaContatos.controller('mainController', function($scope, $http){
    
    var refresh = function(){
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
    };
});