

class MySharedServices {

    //baseUrl = "http://www.getup.agency/dev/react";
    baseUrl = "http://2f7e25c9.ngrok.io/react_native_api/";
    itemUrl = "arrete/"

    // TODO : inclure les .then dans ce fichier
    async getAllArretesList() {
        const res = await fetch(this.baseUrl + this.itemUrl + "getAll.php");
        return res;
    };

    async getArreteById(id) {
        const res = await fetch(this.baseUrl + this.itemUrl + "getById.php?id=" + id);
        return res;
    };

}

const mySharedService = new MySharedServices();
export default mySharedService;