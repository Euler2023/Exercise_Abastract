---
title: "Exercise F62: Automorphisms of K of X over an Arbitrary Field"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 10, printed p. 214, PDF p. 229"
created: 2026-09-06
---

# Exercise F62: Automorphisms of K of X over an Arbitrary Field

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 10
> Let $K$ be a field, and $K(X)$ the quotient field of $K[X]$. Show that every automorphism of $K(X)$ which induces the identity on $K$ is of type
> $$
> X\longmapsto\frac{aX+b}{cX+d},
> $$
> with $a,b,c,d\in K$ such that $(aX+b)/(cX+d)$ is not an element of $K$, or equivalently $ad-bc\ne0$.

## Hints

> [!hint]- Hint 1
> For coprime $P,Q\in K[X]$ with $P/Q$ nonconstant, prove $[K(X):K(P/Q)]=\max(\deg P,\deg Q)$.

> [!hint]- Hint 2
> The polynomial $P(T)-YQ(T)$ is primitive and irreducible in $K[T,Y]$: any factor independent of $Y$ would divide both $P$ and $Q$.

## Solution

> [!success]- Solution
> ### Approach
> For coprime $P,Q\in K[X]$ with $P/Q$ nonconstant, prove $[K(X):K(P/Q)]=\max(\deg P,\deg Q)$.
>
> ### Proof
> **Degree lemma.** Write $r=P(X)/Q(X)$ in lowest terms and let $m=\max(\deg P,\deg Q)\ge1$. In $K[T,Y]$, the polynomial $P(T)-YQ(T)$ is irreducible. Indeed its degree in $Y$ is $1$, so in a nontrivial factorization one factor would have degree zero in $Y$. This factor lies in $K[T]$ and divides both coefficients $P,Q$, hence is a unit. Since this polynomial has positive degree in $T$ and is irreducible, it is primitive over $K[Y]$; Gauss's lemma makes it irreducible over $K(Y)$ in the variable $T$.
>
> The rational function $r$ is transcendental over $K$: the nonzero polynomial $P(T)-rQ(T)$ makes $X$ algebraic over $K(r)$; if $r$ were algebraic over $K$, then $X$ would be algebraic over $K$, a contradiction. The isomorphism $K(Y)\to K(r)$ now carries the irreducible polynomial to $P(T)-rQ(T)$, still of degree $m$ because $r$ is transcendental. Hence
> $$
> [K(X):K(r)]=m.
> $$
>
> If $\sigma$ fixes $K$, its image of $X$ generates $K(X)$, so the lemma forces $m=1$. Thus $\sigma(X)=(aX+b)/(cX+d)$. The numerator and denominator are independent linear polynomials exactly when $ad-bc\ne0$; if they were dependent, their quotient would be constant. Conversely this determinant condition gives the inverse relation
> $$
> X=\frac{d\,\sigma(X)-b}{a-c\,\sigma(X)}.
> $$
> It defines an inverse substitution, proving that each such expression is an automorphism. This proves the classification in arbitrary characteristic.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Exercises/Exercise F61 - Automorphisms of the Rational Function Field|F61 — complex base-field version]]

## Notes

- **Routing:** Field Theory is primary because the generator and extension-degree calculation controls the classification. No analytic or complex-geometric argument is needed.
- **Imported input:** Gauss’s lemma for a polynomial over a UFD is used in the degree lemma [S2, Ch. IV, §2, printed pp. 181-182, PDF pp. 196-197].

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 10, printed p. 214, PDF p. 229]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
