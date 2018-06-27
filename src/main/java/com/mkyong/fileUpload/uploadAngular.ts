uploadFile() {
    return this._soip.uploadFile(this._soip.file).subscribe(res => {
        return res;
    });
}


uploadFile(file: File) {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post('api/upload1',  formdata, {reportProgress: true, responseType: 'text' });
}

getFiles(event) {
    this.file = <File> event.target.files[0];
    alert(this.file.name);
}

<div class="form-group col-sm-6">
<input type="file" (change)="_soip.getFiles($event)" name="file" />
    </div>