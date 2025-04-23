angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope){
 $scope.name = "Lista Telefonica"
 
    $scope.contatos = [
        {name: "Lucas", telefone:  "9489191986"},
        {name: "Natan", telefone:  "94875691986"},
        {name: "Emerson", telefone:  "9487561986"},
        {name: "Gabigol", telefone:  "947561986"},
    ];
    
    $scope.operadoras = [
        {name : "oi", codigo: 14, categoria: "Celular"},
        {name : "Tim", codigo: 41,  categoria: "Celular"},
        {name : "Vivo", codigo: 15,  categoria: "Celular"},
        {name : "Claro", codigo: 21, categoria: "Celular"},
        {name : "Assantet", codigo: 51, categoria: "Fixo"}


    ]

    $scope.adicionarContatos = function(contato){

        if(contato === undefined){
            alert("Necessário Prenncher os Campos")
            return;
        };

        
        console.log($scope.contato)
        $scope.contatos.push(angular.copy(contato))
        delete $scope.contato;

    }

    $scope.apagarContatos = function(contatos){
          $scope.contatos = contatos.filter(contatos => !contatos.selecionado)
    }
    $scope.isContatoSelecionado = function(contatos){
        let isContatoSelecionado = contatos.some(contatos => contatos.selecionado)
        return !isContatoSelecionado;
    }

});


