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
       web: [
            {src: "img/icons/html.svg", title: "HTML5", titulo: "WEB"},
            {src: "img/icons/css.svg", title: "CSS3"},
            {src: "img/icons/bootstrap.svg", title: "Bootstrap"},
            {src: "img/icons/mysql.svg", title: "MYSQL"},
            {src: "img/icons/javascript.svg", title: "Javascript"},
            {src: "img/icons/mongodb.png", title: "MongoDB"},
            {src: "img/icons/node.png", title: "NodejS"},
            {src: "img/icons/jquery.svg", title: "Jquery"},
            {src: "img/icons/angular.svg", title: "AngularJS"},
            {src: "img/icons/php.svg", title: "PHP"},
            {src: "img/icons/codeigniter.png", title: "CodeIgniter"},
            {src: "img/icons/wordpress.png", title: "Wordpress"},
       ],
        academica: [ 
            {src: "img/icons/c.svg", title: "C++", titulo: "Linguagens que utilizei academicamente"},
            {src: "img/icons/csharp.svg", title: "C#"},
            {src: "img/icons/java.svg", title: "Java"},
            {src: "img/icons/jsp.png", title: "JSP"}
        ],
        so: [
            {src: "img/icons/linux.svg", title: "Linux", titulo: "Sistemas Operacionais e ferramentas utilizadas"},
            {src: "img/icons/windows.svg", title: "Windows"},
        ],
        metodologias: [
            {src: "img/icons/scrum.svg", title: "SCRUM", titulo: "Metodologias Ágeis"},
            {src: "img/icons/mvc.svg", title: "MVC"}
        ],
        versionamento: [
            {src: "img/icons/git.svg", title: "GIT", titulo: "Controle de versão"},
            {src: "img/icons/github.png", title: "GitHub"},
            {src: "img/icons/bitbucket.png", title: "BitBucket"},
        ],
    };
    
    $scope.otherProjects = [
        {src: "img/Particip_sites/artico.jpg", url: "http://articoturismo.com", nome: "Artico Turismo"},
        {src: "img/Particip_sites/bruna.jpg", url: "http://brunabittar.com", nome: "Bruna Bittar"},
        {src: "img/Particip_sites/casamentopratico.jpg", url: "http://casamentopratico.com.br", nome: "Casamento Prático"},
        {src: "img/Particip_sites/estevam.jpg", url: "http://estevamodamasculina.com.br", nome: "Estevam Moda"},
        {src: "img/Particip_sites/mariasonhou.jpg", url: "http://mariasonhou.com.br", nome: "Maria Sonhou"},
        {src: "img/Particip_sites/nocs.jpg", url: "http://nocs.com.br", nome: "NOCS"},
        {src: "img/Particip_sites/nutriri.jpg", url: "http://nutriri.com.br", nome: "Nutriri"},
        {src: "img/Particip_sites/seminovo.jpg", url: "http://seminovo.com.br", nome: "Semi Novo Certo"},
    ];
    
    $scope.criarPost = function(){
        $http.post('/criaPost', $scope.formPost)
        .success(function(data){
            $scope.formPost = {};
            $scope.contatos = data;
            console.log(data);
        })
        .error(function(){
            console.log('Erro ' + data);
        });
    }

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