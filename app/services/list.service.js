class ListService {
    constructor() {}

    LOCAL_STORAGE_KEY = 'lists';

    salvarLocal(list) {
        let lists = localStorage.getItem(this.LOCAL_STORAGE_KEY);

        lists = lists ? JSON.parse(lists) : [];

        lists.push(list)

        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(lists));

        return lists;
    }
}