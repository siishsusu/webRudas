var BuyList = {
    name: "boughtList",
    list: [
        { name: "Помідори", count: 1, bought: false },
        { name: "Печиво", count: 1, bought: false },
        { name: "Сир", count: 1, bought: false }
    ]
};
/* HTML-розмітка для елементів списку, які залишились.
   Використовуються підстановки для вставки даних:
   - {{delid}}: ідентифікатор видалення елемента;
   - {{remaindId}}: ідентифікатор елемента списку;
   - {{item_remainder_id}}: ідентифікатор назви елемента;
   - {{strikeThrough}}: стиль з лінією через текст, якщо елемент вже куплено;
   - {{item}}: назва елемента;
   - {{bought_del_id}}: ідентифікатор видалення елемента, що куплено;
   - {{bought_delid}}: ідентифікатор елемента, що куплено;
   - {{count}}: кількість елемента. */
var remainderItemHtml = "<div data-del-id='{{delid}}' class='leftovers' id={{remaindId}}><span id='{{item_remainder_id}}' data-del-id='{{delid}}'{{strikeThrough}}>{{item}}</span><span class='orangeCircleWithNumber' id={{bought_del_id}} data-del-id='{{bought_delid}}'{{strikeThrough}}>{{count}}</span></div>";
/* HTML-розмітка для елементів списку покупок.
   Використовуються підстановки для вставки даних:
   - {{delid}}: ідентифікатор видалення елемента;
   - {{delname}}: назва елемента для видалення;
   - {{itemRowId}}: ідентифікатор рядка елемента;
   - {{minus}}: ідентифікатор кнопки "Зменшити кількість";
   - {{item}}: назва елемента;
   - {{count}}: кількість елемента;
   - {{plus}}: ідентифікатор кнопки "Збільшити кількість";
   - {{didnotBoughtBtnId}}: ідентифікатор кнопки "Не куплено";
   - {{buttonsAfterId}}: ідентифікатор блоку з кнопками після покупки;
   - {{buyId}}: ідентифікатор блоку з кнопкою покупки;
   - {{buyBtnId}}: ідентифікатор кнопки "Куплено";
   - {{del_id}}: ідентифікатор кнопки видалення;
   - {{item}}: назва елемента;
   - {{count}}: кількість елемента. */
var itemHtml = "<div class='row'><span spellcheck='false' data-del-id='{{delid}}' data-item-name='{{delname}}' contenteditable='true' class='item' id={{itemRowId}}>{{item}}</span><div class='UI'><button data-tooltip='Зменшити кількість' class='minus' id={{minus}}>-</button><label class='Labelamount'><div class='DivCount'>{{count}}</div></label><button data-tooltip='Збільшити кількість' class='plus' id={{plus}}>+</button></div><div class='buttonsAfter' id={{buttonsAfterId}}><button data-tooltip='Не куплено' class='didnotBought' id={{didnotBoughtBtnId}}>не куплено</button></div><div class='buttons' id={{buyId}}><button data-tooltip='Куплено' class='buy' id={{buyBtnId}}>купити</button><button data-tooltip='Видалити' id={{del_id}} data-del-id='{{delid}}' class='cross'>X</button></div></div>";
/* Збереження списку покупок
   Зберігає поточний список покупок в локальному сховищі. */
function saveBuyList() {
    localStorage.setItem("buyList", JSON.stringify(BuyList.list));
}

/* Завантаження списку покупок
   Завантажує попередньо збережений список покупок з локального сховища і оновлює глобальну змінну BuyList.list.
   Якщо список покупок не знайдено в локальному сховищі, створюється порожній список.
   Якщо список покупок є порожнім, додаються початкові товари: Помідори, Печиво, Сир.*/
function loadBuyList() {
    var savedList = localStorage.getItem("buyList");
    if (savedList) {
        BuyList.list = JSON.parse(savedList);
    } else {
        BuyList.list = [
            { name: "Помідори", count: 1, bought: false },
            { name: "Печиво", count: 1, bought: false },
            { name: "Сир", count: 1, bought: false }
        ];
    }
}

/* Відображення списку покупок
   Оновлює вміст сторінки, відображаючи список покупок. */
function showlist() {
    $("#contForRow").html("");
    $("#leftovers").html("");
    $(".inCart").html("");

    for (let i = 0; i < BuyList.list.length; i++) {
        var item = BuyList.list[i];
        var plusBtnId = i;
        var del_item_id = "del_buyitem_" + i;
        var del_bought_item_id = "del_boughtitem" + i;

        var strikeThrough = BuyList.list[i].bought ? " style='text-decoration: line-through;'" : "";
        var currentRemainderItemHtml = remainderItemHtml
            .replace('{{remaindId}}', 'remaindId_' + i)
            .replace('{{item}}', item.name)
            .replace('{{count}}', item.count)
            .replace("{{delid}}", i)
            .replace('{{item_remainder_id}}', 'item_remainder_id_' + i)
            .replace('{{bought_del_id}}', 'bought_del_id_' + i)
            .replace('{{bought_delid}}', i)
            .replace(/{{strikeThrough}}/g, strikeThrough);

        var currentItemHtml = itemHtml
            .replace("{{plus}}", plusBtnId)
            .replace("{{delname}}", item.name)
            .replace("{{itemRowId}}", item.name + i)
            .replace("{{buyId}}", "buy_Id" + i)
            .replace("{{buyBtnId}}", i)
            .replace("{{minus}}", i)
            .replace("{{item}}", item.name)
            .replace("{{count}}", item.count)
            .replace("{{del_id}}", del_item_id)
            .replace("{{delid}}", i)
            .replace("{{didnotBoughtBtnId}}", i)
            .replace("{{buttonsAfterId}}", i)
            .replace("{{plus}}", plusBtnId)
            .replace(/{{delid}}/g, i);

        $("#contForRow").append(currentItemHtml);
        $("#leftovers").append(currentRemainderItemHtml);

        var current_bought_remind = currentRemainderItemHtml.replace(
            "remaindId_" + i,
            "boughtRemindId_" + i
        );
        $(".inCart").append(current_bought_remind);

        if (!BuyList.list[i].bought)
            $("#boughtRemindId_" + i).css({ display: "none" });

        $("#" + del_item_id).click(function () {
            remove_item($(this).attr("data-del-id"));
        });

        $("#" + i + ".plus").click(function () {
            BuyList.list[this.id].count += 1;
            saveBuyList();
            showlist();
        });

        $("#" + i + ".minus").click(function () {
            if (BuyList.list[this.id].count > 1) {
                BuyList.list[this.id].count -= 1;
                showlist();
                saveBuyList();
            } else if (BuyList.list[this.id].count <= 1) {
                $(this).css({ opacity: "0.5", cursor: "not-allowed" });
            }
        });

        $("#" + i + ".buy").click(function () {
            BuyList.list[this.id].bought = true;
            saveBuyList();
            showlist();
        });

        $("#" + i + ".didnotBought").click(function () {
            BuyList.list[this.id].bought = false;
            saveBuyList();
            showlist();
        });

        $("#" + item.name + i).keydown(function () {
            var value = $(
                "#" + $(this).attr("data-item-name") + $(this).attr("data-del-id")
            ).html();
            BuyList.list[$(this).attr("data-del-id")].name = value;
            $("#item_remainder_id_" + $(this).attr("data-del-id")).html(value);
            saveBuyList();
        });

        if (BuyList.list[i].count > 1)
            $("#" + i + ".minus").css({ opacity: "1", cursor: "pointer" });

        if (BuyList.list[i].bought == true) {
            $("#" + i + ".plus").css({ visibility: "hidden" });
            $("#" + i + ".minus").css({ visibility: "hidden" });
            $("#" + i + ".buttonsAfter").css({ display: "inline-block" });
            $("#buy_Id" + i).css({ display: "none" });
            $("#remaindId_" + i).css({ display: "none" });
            $("#" + item.name + i)
                .attr("contenteditable", "false")
                .css({ "text-decoration": "line-through" });
            $("#boughtRemindId" + i).css({ "text-decoration": "line-through" });
            $("#bought_del_id" + i).css({ "text-decoration": "line-through" });
        }
    }
}
/* Видалення товару зі списку
   Видаляє товар зі списку за заданим індексом. */
function remove_item(id) {
    BuyList.list.splice(id, 1);
    saveBuyList();
    showlist();
}


$(".add").click(function () {
    addItemToList();
});

$("#searchingBar").keypress(function (e) {
    if (e.which == 13) {
        addItemToList();
    }
});
/* Додавання товару:
якщо його нема в списку, то додається товар,
якщо він є в списку, то додається кількість */
function addItemToList() {
    var searchingBarValue = $("#searchingBar").val();
    if (searchingBarValue !== "") {
        var existingItemIndex = BuyList.list.findIndex(function (item) {
            return item.name === searchingBarValue;
        });

        if (existingItemIndex !== -1) {
            if(BuyList.list[existingItemIndex].bought === false){
                BuyList.list[existingItemIndex].count += 1;
            }
        } else {
            BuyList.list.push({
                name: searchingBarValue,
                count: 1,
                bought: false
            });
        }

        saveBuyList();
        $("#searchingBar").val("");
        $("#searchingBar").focus();
        showlist();
    }
}

loadBuyList();
showlist();