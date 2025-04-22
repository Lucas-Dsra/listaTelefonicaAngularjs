angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope){
 $scope.name = "Lista Telefonica"
    $scope.contatos = [
        {name: "Lucas", telefone:  "9489191986"},
        {name: "Natan", telefone:  "94875691986"},
        {name: "Emerson", telefone:  "9487561986"},
        {name: "Gabigol", telefone:  "947561986"},
    ]
    $scope.adicionarContatos = function(contato){
        if(contato === undefined){
            alert("Necessário Prenncher os Campos")
            return;
        }
        console.log($scope.contato)
        $scope.contatos.push(angular.copy(contato))
        delete $scope.contato;

    }

});


