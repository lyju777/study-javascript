/**
 * try...catch
 *
 */
function runner() {
  try {
    console.log("hello");

    throw new Error("큰 문제가 생겼습니다!");

    console.log("code factory");
  } catch (e) {
    console.log(`---catch----`);
    console.log(e);
  } finally {
    console.log(`---finally---`);
  }
}
runner();
