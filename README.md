# class-cpp-generator
Данный скрипт предназначен для генерации методов для класса, объявленного в заголовочном файле, которые можно поместить в cpp-файл.
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
При таких входных данных утилита вернёт следующий результат:

```
CRectangle::CRectangle()
{

}

CRectangle::CRectangle(Vec2 leftTop, Vec2 rightBottom)
{

}

void CRectangle::Draw(ICanvas& canvas) const 
{

}

Vec2 CRectangle::GetLeftTop() const
{

}

Vec2 CRectangle::GetRightBottomTop() const
{

}

```
