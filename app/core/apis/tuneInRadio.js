const stationsURL = 'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json'

export class tuneInRadioAPI{
        static getStations = async () => {
                return await  fetch(stationsURL, { method: 'GET'})
                         .then(response => response.json())
                         .then(response => {
                                let categories = {}

                                response.data.forEach(({ id, tags }) =>  tags.forEach(tag => categories.hasOwnProperty(tag)  ? categories[tag].push(id) : categories[tag] = [id]))


                                 const data = {
                                        data: {
                                                list: response.data,
                                                categories: categories
                                         }
                                 }
                                 return data;
                         })
        }
}