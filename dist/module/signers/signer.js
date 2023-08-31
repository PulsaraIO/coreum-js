export class Signer {
    #signerId = "default";
    _address;
    get address() {
        return this._address;
    }
    async sign(...args) {
        throw new Error("Method not implemented");
    }
    async requestConnection() {
        throw new Error("Method not implemented");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NpZ25lcnMvc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxNQUFNO0lBQ2pCLFNBQVMsR0FBVyxTQUFTLENBQUM7SUFDcEIsUUFBUSxDQUFTO0lBRTNCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQVM7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0YifQ==