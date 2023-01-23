const accessT = "mpl68xKWYNbARkj5Io3VhKzx6uaodUP_wKaqi6ShvE0"

const basic_url = 'https://cdn.contentful.com'

const url = `spaces/yadj1kx9rmg0/environments/staging/asset_keys?access_token=${accessT}`


const modifText = async () =>{
    const text = await axios.get(`${basic_url}/${url}`)
    console.log('text : ', text)
}

modifText()