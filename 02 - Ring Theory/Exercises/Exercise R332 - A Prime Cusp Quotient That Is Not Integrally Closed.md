---
title: "Exercise R332: A Prime Cusp Quotient That Is Not Integrally Closed"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - integral-closure
  - prime-ideals
  - quotient-rings
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 3, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise R332: A Prime Cusp Quotient That Is Not Integrally Closed

## Problem Statement

> [!question] Neukirch I.2.3
> In the polynomial ring $A=\mathbb Q[X,Y]$, consider the principal ideal $\mathfrak p=(X^2-Y^3)$. Show that $\mathfrak p$ is a prime ideal, but $A/\mathfrak p$ is not integrally closed.

## Hints

> [!hint]- Hint 1: Parametrize the equation
> Define $\varphi:\mathbb Q[X,Y]\to\mathbb Q[t]$ by $X\mapsto t^3$ and $Y\mapsto t^2$. Its image is $\mathbb Q[t^2,t^3]$. To determine the kernel, divide in $X$ by the monic polynomial $X^2-Y^3$.

> [!hint]- Hint 2: Separate even and odd exponents
> The remainder has the form $a(Y)X+b(Y)$. After substitution it becomes $t^3a(t^2)+b(t^2)$. The first summand has only odd exponents and the second only even exponents.

> [!hint]- Hint 3: Find the missing integral element
> In the fraction field of $\mathbb Q[t^2,t^3]$, the parameter is $t=t^3/t^2$. It satisfies a monic quadratic with a coefficient in this subring. Can a polynomial in $t^2$ and $t^3$ have a nonzero term of degree $1$?

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $B=\mathbb Q[t^2,t^3]\subseteq\mathbb Q[t]$ and define the ring homomorphism
> $$
> \varphi:\mathbb Q[X,Y]\longrightarrow\mathbb Q[t],
> \qquad \varphi(X)=t^3,\quad \varphi(Y)=t^2.
> $$
> Its image is $B$, and $\varphi(X^2-Y^3)=t^6-t^6=0$. Thus $\mathfrak p\subseteq\ker\varphi$.
>
> ### 1. Compute the kernel and prove primality
> Since $X^2-Y^3$ is monic in $X$, polynomial division over $\mathbb Q[Y]$ writes every $F\in\mathbb Q[X,Y]$ as
> $$
> F=H(X,Y)(X^2-Y^3)+a(Y)X+b(Y),
> \qquad a,b\in\mathbb Q[Y].
> $$
> If $F\in\ker\varphi$, its remainder satisfies
> $$
> t^3a(t^2)+b(t^2)=0.
> $$
> The first summand has exponents $3,5,7,\ldots$, whereas the second has exponents $0,2,4,\ldots$. No terms can cancel between the two summands, so both are zero. The substitution $\mathbb Q[Y]\to\mathbb Q[t]$, $Y\mapsto t^2$, is injective: distinct powers of $Y$ become distinct powers of $t$. It follows that $a=b=0$.
>
> Hence $\ker\varphi=\mathfrak p$. The first isomorphism theorem gives
> $$
> A/\mathfrak p\cong B=\mathbb Q[t^2,t^3].
> $$
> The ring $B$ is a subring of the integral domain $\mathbb Q[t]$, so it is an integral domain. Equivalently, $\mathfrak p$ is a prime ideal of $A$.
>
> ### 2. Exhibit a missing integral element in the fraction field
> Since $t^2,t^3\in B$ and $t^2\ne0$,
> $$
> t=\frac{t^3}{t^2}\in\operatorname{Frac}(B).
> $$
> In fact $\operatorname{Frac}(B)=\mathbb Q(t)$: this fraction field is contained in $\mathbb Q(t)$ and contains $\mathbb Q$ and $t$.
>
> The element $t$ satisfies the monic equation
> $$
> Z^2-t^2=0,\qquad Z^2-t^2\in B[Z].
> $$
> It is therefore integral over $B$. On the other hand, every monomial in $t^2,t^3$ has exponent $2a+3b$ for integers $a,b\ge0$. These exponents are $0$ or at least $2$, never $1$. Every element of $B$ thus has zero coefficient of $t$, so $t\notin B$.
>
> We have found an element of $\operatorname{Frac}(B)$ integral over $B$ but outside $B$. Therefore $B$, and consequently $A/\mathfrak p$, is not integrally closed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]

## Notes

- **Source verification:** The complete exercise statement was visually checked in [S4, Ch. I, §2, Exercise 3, printed p. 15, PDF p. 34]. No source figure is required, and no error was identified in the statement.
- **Proof status and inputs:** The kernel computation and the explicit missing integral element are independent derivations. The proof imports polynomial division by a monic polynomial, the first isomorphism theorem, and the equivalence between primality of an ideal and the domain property of its quotient. It proves the specific kernel and nonnormality directly.
- **Method boundary:** The witness $t$ lies in the quotient's own fraction field, by $t=t^3/t^2$. Merely adjoining an element algebraic over the quotient in some larger field would not establish failure of integral closedness.
- **Normalization:** The integral closure of $B$ in $\mathbb Q(t)$ is $\mathbb Q[t]$. Indeed, $B[t]=\mathbb Q[t]$ is integral over $B$ because $t$ is integral; conversely any element integral over $B$ is integral over $\mathbb Q[t]$ and hence belongs to $\mathbb Q[t]$, which is integrally closed by the polynomial-denominator argument in [[02 - Ring Theory/Exercises/Exercise R331 - Polynomial Rings over Integrally Closed Domains|Exercise R331]]. The map $t\mapsto(t^3,t^2)$ parametrizes the cusp $X^2=Y^3$.
- **Routing:** Ring Theory is primary because the solution computes a polynomial-ring kernel and tests integral closure of the resulting domain. The cusp is a geometric interpretation of that computation.

