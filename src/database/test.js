const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
/*     await saveOrphanage (db, {   
        lat: "-27.22026",
        lng: "-49.6558531",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 ano que se encontre em situação de risco e/ou vunerabilidade social.",
        whatsapp: "65981654655",
        images: [
            "https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
        ].toString(),
        instructions: "Venha como se sentir a vontadade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h ate 8h.",
        open_on_weekends: "0"
            
    })
 */
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    /* //consultar somente 1 orphanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage) */

    //deletar dado da tabela
    /* const selectedOrphanages = await db.all("DELETE * FROM orphanages WHERE id='3'")
    console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
    */
})