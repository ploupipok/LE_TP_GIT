// écriture en ES6 avec le mot-clé class
/* Création de la class "CompoTaskList" */
/* Utilisation de la méthode "constructor" pour initialiser un objet */
/* Affecte "param" à "this" */

class CompoTaskList {
    constructor(param) {
        this.param = param;
    }

    /**
     * Retourne la tâche passée en paramètre au constructeur
     */
    getTaskList() {
        return this.param.taskList;
    }

    /**
     * Retourne l'élément du DOM passé en paramètre au constructeur
     */
    getElement() {
        return this.param.element;
    }

    /**
     * @class
     * @summary Composant qui affiche une tâche
     * Les paramètres obligatoire, à transmettre sous la forme
     * d'un objet, sont :
     * - task : objet Task à afficher
     * - element : objet HTMLElement du DOM dans lequel
     *   le code HTML doit être affiché
     * @param {*} param - Objet de paramétrage
     * @example
     * let tk = new Task('test', null);
     * let compoTk = new CompoTask({
     *    task: tk,
     *    element: document.getElementById('task')
     * }) 
     * compoTk.render();
     */
    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}