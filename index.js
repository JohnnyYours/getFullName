// Завершите функцию getFullName, чтобы она возвращала полное имя в нижнем регистре, если данное поле существует. В противном случае функция должна вернуть undefined.

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
 const getFullName = user => {
	return user?.info?.name.toLowerCase();
}

// Sample usage - do not modify
console.log(getFullName({info: {name: "ALEX"}})); // "alex"
console.log(getFullName({info: null})); // undefined
console.log(getFullName({})); // undefined