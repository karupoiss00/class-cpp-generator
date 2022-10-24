# class-cpp-generator
Данный скрипт предназначен для генерации cpp-файла для класса, объявленного в заголовочном файле.
Принимает на вход исключительно код класса, пример ниже.
Утилита чувствительна  к форматированию, поддерживает следующий стиль объявления класса:

```
class CRectangle : public CShape
{
public:
	CRectangle();
	CRectangle(Vec2 leftTop, Vec2 rightBottom);

	void Draw(ICanvas& canvas) const override;
	Vec2 GetLeftTop() const;
	Vec2 GetRightBottomTop() const;
private:
	Vec2 m_leftTop;
	Vec2 m_rightBottom;
};
```
