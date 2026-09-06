---
title: "Exercise R236: Derivations of Fraction Fields and Logarithmic Derivatives"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 11, printed pp. 214-215, PDF pp. 229-230"
created: 2026-09-06
---

# Exercise R236: Derivations of Fraction Fields and Logarithmic Derivatives

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 11
> Let $A$ be a commutative entire ring and $K$ its quotient field. Let $D:A\to A$ be a derivation, that is, an additive homomorphism satisfying $D(xy)=xDy+yDx$ for $x,y\in A$.
>
> (a) Prove that $D$ has a unique extension to a derivation of $K$ into itself, and that the extension satisfies
> $$
> D(x/y)=\frac{yDx-xDy}{y^2}\qquad(x,y\in A,\ y\ne0).
> $$
> [Define the extension by this formula, prove independence of the fraction representation, and show it is a derivation with the original values on $A$.]
>
> (b) Let $L(x)=Dx/x$ for $x\in K^\times$. Show that $L(xy)=L(x)+L(y)$. This homomorphism is called the logarithmic derivative.
>
> (c) Let $D$ be the standard derivative on $k[X]$ over a field $k$, and let $R(X)=c\prod_i(X-\alpha_i)^{m_i}$, with $\alpha_i\in k$, $c\in k$, and $m_i\in\mathbb Z$. Show that
> $$
> R'/R=\sum_i\frac{m_i}{X-\alpha_i}.
> $$

> [!warning] Source issue / scope clarification
> The printed part (c) allows $c=0$, for which $R=0$ and $R'/R$ is undefined. The intended statement requires $c\ne0$.

## Hints

> [!hint]- Hint 1
> For (a), first check invariance when numerator and denominator are both multiplied by the same nonzero element.

> [!hint]- Hint 2
> For (c), logarithmic differentiation turns a product into a sum, including negative powers.

## Solution

> [!success]- Solution
> ### Approach
> For (a), first check invariance when numerator and denominator are both multiplied by the same nonzero element.
>
> ### Proof
> **(a)** The product rule at $1\cdot1$ gives $D1=2D1$, so $D1=0$. Define $\widetilde D(x/y)=(yDx-xDy)/y^2$. Scaling numerator and denominator by $z\ne0$ leaves the value unchanged, since
> $$
> (yz)D(xz)-(xz)D(yz)=z^2(yDx-xDy).
> $$
> Two equal fractions can be compared at the common denominator $yy'$: their numerators $xy'$ and $x'y$ agree. This proves independence. Taking $y=1$ recovers $Dx$.
>
> For two fractions with common denominator $v$, the formula is additive directly:
> $$
> \widetilde D((u+w)/v)=\widetilde D(u/v)+\widetilde D(w/v).
> $$
> For products, expand $D(ux)$ and $D(vy)$ in
> $$
> \widetilde D(ux/vy)=\frac{vyD(ux)-uxD(vy)}{v^2y^2};
> $$
> collecting terms gives $(x/y)\widetilde D(u/v)+(u/v)\widetilde D(x/y)$. Thus the extension is a derivation. Any extension must satisfy $D(y(x/y))=Dx$, forcing the quotient formula and hence uniqueness.
>
> **(b)** Divide $D(xy)=xDy+yDx$ by $xy$ to get the claimed identity. Also $L(1)=0$, and $L(x^{-1})=-L(x)$; therefore $L(x^m)=mL(x)$ for every integer $m$.
>
> **(c)** Use $c\ne0$, as explained in the warning. Since $D(c)=0$ and $D(X-\alpha_i)=1$, part (b) gives
> $$
> L(R)=L(c)+\sum_i m_iL(X-\alpha_i)=\sum_i\frac{m_i}{X-\alpha_i}.
> $$
> The integers $m_i$ are interpreted in $k$, so the assertion remains valid in positive characteristic.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 11, printed pp. 214-215, PDF pp. 229-230]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
