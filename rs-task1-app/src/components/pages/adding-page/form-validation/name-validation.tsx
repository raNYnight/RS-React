function isValidName(name: string | undefined): boolean {
  const regex = /^[a-zA-Z\s]*$/;
  if (name === undefined) return false;
  if (!name.trim()) {
    return false;
  }

  if (!regex.test(name.trim())) {
    return false;
  }

  if (name.trim().length < 3 || name.trim().length > 30) {
    return false;
  }

  return true;
}

export default isValidName;
