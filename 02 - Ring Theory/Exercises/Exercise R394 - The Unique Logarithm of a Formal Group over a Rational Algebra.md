---
title: 'Exercise R394: The Unique Logarithm of a Formal Group over a Rational Algebra'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 2, printed p. 345, PDF p. 364
source_refs:
- S4/ch-V/sec-4/ex-2
created: '2026-10-23'
---

# Exercise R394: The Unique Logarithm of a Formal Group over a Rational Algebra

## Problem Statement

> [!question] Neukirch V.4.2
> Let $R$ be a commutative $\mathbb Q$-algebra. Then for every formal group $F(X,Y)$ over $R$, there exists a unique isomorphism
> $$
> \log_F:F\xrightarrow{\sim}\mathbb G_a,
> $$
> such that $\log_F(X)\equiv X\pmod{\deg2}$, the logarithm of $F$.
>
> **Printed hint:** Let $F_1=\partial F/\partial Y$. Differentiating $F(F(X,Y),Z)=F(X,F(Y,Z))$ yields $F_1(X,0)\equiv1\pmod{\deg1}$. Let $\psi(X)=1+\sum_{n=1}^\infty a_nX^n\in R[[X]]$ be the power series such that $\psi(X)F_1(X,0)=1$. Then $\log_F(X)=X+\sum_{n=1}^\infty\frac{a_n}{n}X^n$ does what we want.

> [!warning] Source issue or convention
> The printed hint has an indexing error in its final antiderivative: for the stated coefficients of $\psi$, use $X+\sum_{n\ge1}a_nX^{n+1}/(n+1)$. The original hint remains above; the proof uses this corrected series.

## Hints

> [!hint]- Hint 1
> Put $A(X)=\partial_2F(X,0)$ and differentiate associativity with respect to $Z$ at $Z=0$.

> [!hint]- Hint 2
> The correct normalized series is the formal integral of $A(X)^{-1}$; verify its homomorphism property by differentiating with respect to $Y$.

## Solution

> [!success]- Independent derivation
> Let $A(X)=\partial_2F(X,0)\in R[[X]]$. Its constant term is $1$, so it is invertible. Write $A(X)^{-1}=1+\sum_{n\ge1}a_nX^n$. Since $R$ is a $\mathbb Q$-algebra we can integrate term by term:
> $$
> \ell(X)=\int_0^X A(T)^{-1}dT
> =X+\sum_{n\ge1}\frac{a_n}{n+1}X^{n+1}.
> $$
> Differentiate associativity in $Z$ and set $Z=0$. The result is
> $$
> A(F(X,Y))=\partial_2F(X,Y)A(Y).
> $$
> Therefore
> $$
> \frac\partial{\partial Y}\ell(F(X,Y))
> =A(F(X,Y))^{-1}\partial_2F(X,Y)=A(Y)^{-1}=\ell'(Y).
> $$
> In a $\mathbb Q$-algebra a formal derivative in $Y$ vanishes only for a series independent of $Y$. Thus $\ell(F(X,Y))-\ell(Y)$ depends only on $X$. Evaluation at $Y=0$ gives $\ell(X)$, using $F(X,0)=X$ and $\ell(0)=0$. Hence
> $$
> \ell(F(X,Y))=\ell(X)+\ell(Y).
> $$
> The identity $F(X,0)=X$ follows from the formal-group axioms: $h(X)=F(X,0)$ has linear term $X$ and associativity gives $h\circ h=h$; composing with the inverse of $h$ yields $h=X$.
>
> Because $\ell'(0)=1$, recursive composition inversion gives $\ell^{-1}\in R[[X]]$. The displayed identity then makes it a formal-group isomorphism. If $g$ is another normalized homomorphism, differentiating $g(F(X,Y))=g(X)+g(Y)$ at $Y=0$ gives $g'(X)A(X)=g'(0)=1$. Thus $g'=\ell'$ and $g(0)=\ell(0)=0$, proving uniqueness.
>
> The printed hint's final sum is not the integral of its stated $\psi$. For $F=X+Y+XY$, $A(X)=1+X$ and $\psi=1-X+X^2-\cdots$; the printed $X+\sum a_nX^n/n$ even cancels its linear term, while the correct integral begins $X-X^2/2+X^3/3-\cdots$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]

## Notes

- **Source status:** The full problem and printed hint were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 2, printed p. 345, PDF p. 364]. Formal-group and isomorphism definitions were checked at [printed pp. 342–343, PDF pp. 361–362].
- **Source issue:** With the printed definition $\psi=1+\sum_{n\ge1}a_nX^n$, the correct antiderivative is $X+\sum_{n\ge1}a_nX^{n+1}/(n+1)$. The original hint is preserved above; the corrected construction and uniqueness are proved independently.
- **Proof inputs:** Only formal differentiation, termwise integration over a $\mathbb Q$-algebra, and recursive inversion of a series with unit linear coefficient are used.
