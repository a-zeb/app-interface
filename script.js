document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.getElementById("sign-in-form");
  const userIdInput = document.getElementById("userId");
  const saveIdCheckbox = document.getElementById("saveId");
  const storageKey = "savedUserId";

  const persistUserId = () => {
    if (!userIdInput) return;
    const value = userIdInput.value.trim();
    if (saveIdCheckbox && saveIdCheckbox.checked && value) {
      localStorage.setItem(storageKey, value);
    } else {
      localStorage.removeItem(storageKey);
    }
  };

  // Prefill saved ID when available.
  const savedId = localStorage.getItem(storageKey);
  if (savedId && userIdInput) {
    userIdInput.value = savedId;
    if (saveIdCheckbox) saveIdCheckbox.checked = true;
  }

  if (saveIdCheckbox) {
    saveIdCheckbox.addEventListener("change", persistUserId);
  }

  if (userIdInput) {
    userIdInput.addEventListener("input", () => {
      if (saveIdCheckbox && saveIdCheckbox.checked) {
        persistUserId();
      }
    });
  }

  if (signInForm) {
    signInForm.addEventListener("submit", (event) => {
      event.preventDefault();
      persistUserId();
      alert(
        "Demo only: external links are live, but sign in is not connected."
      );
    });
  }
});
