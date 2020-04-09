/*
var retornoBadges = document.querySelector("#badges"); 

var headers;
headers.Accept  = 'application/json';

headers.Accept-Encoding = 'gzip, deflate, br';

headers.Accept-Language = 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7';
headers.Connection  = 'keep-alive';
headers.Cookie  = '_ga=GA1.2.274531479.1559481834; secured_previously_signed_in_user=BXYGYhw9piWgMkbeBgUNMkaB%2FpDfyDdK48JipvODHZ5TROUcSm4%3D--eKe9aUnR60fZUHFM--SHY8nbzSc387j6RklTaiwA%3D%3D; ga_ab_slice=86; _gid=GA1.2.1242679729.1586400414; time_zone_name=Brasilia; _jefferson_session=vwU37GOhUvWWucCTgVwRO7EBJI0D2cu5%2FqHSkt8vLA%2B11kyo7PmtDmM6FCDqSa7RncL%2FY5nhAieizrDfVdaoIcLgB%2FXlq9RK5jMuN5wnApq%2Fvex%2BzzlgdHO9wlSjm8qF6bLWkWMI9Kq75zTLIFk%3D--c9mtqTbRCXuzRoV3--m%2Fg5hT8rUpW6QwXTu8ixsw%3D%3D; _gat=1';
headers.Host    = 'www.youracclaim.com';
headers.If-None-Match   = 'W/"9ed1e6d2311f281ef1b597cc50e66c4e"';
headers.Referer = 'https://www.youracclaim.com/users/natancarlos/badges?sort=-state_updated_at&page=1';
headers.Sec-Fetch-Dest  = 'empty';
headers.Sec-Fetch-Mode  = 'cors';
headers.Sec-Fetch-Site  = 'same-origin';
headers.User-Agent  = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36';
headers.X-CSRF-Token    = 'pjhlQsBdNj7ymslGrFC3ePxpkwTGtIY6qRTadlJh5yzpa5yPzboI3ZXShrI6/U2wCrWFonOlX0TbQPOw+g/S7A==';
headers.X-Requested-With    = 'XMLHttpRequest';


// utiliza o axios pra fazer a requisição no usuário digitado no input
axios.get('https://www.youracclaim.com/users/natancarlos/badges?sort=-state_updated_at&page=1')

// se der certo, vai processar
.then(function(response){

    console.log(response);

    // cria o título e a ul da lista
    //retornoBadges.innerHTML = '<h4>Repositórios: </h4>';
    //var ul = document.createElement('ul');

    // faz o loop nos repositórios
    /*
    for (repo of response.data) {

        // cria a li e coloca o nome do repositório
        var li = document.createElement('li');
        li.innerHTML = repo.name;
        
        // adiciona na lista
        ul.appendChild(li);
    }
    
    // escreve a ul na div
    retornoBadges.appendChild(ul);
    

})

// se der erro, vai tratar
.catch(function(error){

    //console.log(error);

    // escreve o erro na div retorno
    //retornoBadges.innerHTML = error;

    // faz o sweet alert no erro
    ///Swal.fire({
       // icon: 'error',
        //title: 'Ocorreu um erro',
        //text: error,
    //}); 

})       */