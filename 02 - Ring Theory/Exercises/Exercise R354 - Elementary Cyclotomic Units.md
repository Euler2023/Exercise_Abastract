---
title: "Exercise R354: Elementary Cyclotomic Units"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Exercise 5, printed p. 44, PDF p. 63"
created: 2026-10-20
---

# Exercise R354: Elementary Cyclotomic Units

## Problem Statement

> [!question] Neukirch I.7.5
> Let $\zeta$ be a primitive $m$-th root of unity, $m\ge3$. Show that the numbers
> $$
> \frac{1-\zeta^k}{1-\zeta}
> $$
> for $(k,m)=1$ are units in the ring of integers of the field $\mathbb Q(\zeta)$. The subgroup of the group of units they generate is called the group of cyclotomic units.

## Hints

> [!hint]- Hint 1: Choose a positive exponent representative
> Replace $k$ by its representative $r$ with $1\le r<m$. Since $(k,m)=1$, this is possible with $(r,m)=1$. A geometric series writes the quotient as an element of $\mathbb Z[\zeta]$.

> [!hint]- Hint 2: Find the inverse exponent modulo $m$
> Choose $\ell$ with $1\le\ell<m$ and $r\ell\equiv1\pmod m$. Then $\zeta^{r\ell}=\zeta$. Apply the same geometric-series calculation using $\zeta^r$.

> [!hint]- Hint 3: Multiply the two integer polynomials
> The proposed inverse is $1+\zeta^r+\cdots+\zeta^{r(\ell-1)}$. Multiplication telescopes to $1$; no assertion that $1-\zeta$ itself is a unit is needed.

## Solution

> [!success]- Independent derivation with an explicit inverse
> Put $K=\mathbb Q(\zeta)$ and let $k\in\mathbb Z$ satisfy $(k,m)=1$. Choose its representative $r\in\{1,\ldots,m-1\}$. The value of the displayed quotient is unchanged because $\zeta^k=\zeta^r$.
>
> The element $\zeta$ is integral, since it satisfies $T^m-1=0$. Therefore every element of $\mathbb Z[\zeta]$ is an algebraic integer. Also $\zeta\ne1$ and $\zeta^r\ne1$, so the denominators below are nonzero. A finite geometric sum gives
> $$
> u_k=\frac{1-\zeta^r}{1-\zeta}
> =\sum_{i=0}^{r-1}\zeta^i\in\mathbb Z[\zeta]\subseteq\mathcal O_K.
> $$
> By coprimality, choose $\ell\in\{1,\ldots,m-1\}$ with $r\ell\equiv1\pmod m$. Define
> $$
> v=\sum_{j=0}^{\ell-1}\zeta^{rj}
> =\frac{1-\zeta^{r\ell}}{1-\zeta^r}
> \in\mathbb Z[\zeta]\subseteq\mathcal O_K.
> $$
> Since $\zeta^{r\ell}=\zeta$, multiplication gives
> $$
> u_kv
> =\frac{1-\zeta^r}{1-\zeta}
>   \frac{1-\zeta^{r\ell}}{1-\zeta^r}
> =1.
> $$
> Thus $u_k$ has an inverse in $\mathbb Z[\zeta]$, and in particular is a unit of $\mathcal O_K$. The argument includes $r=1$, where $u_k=1$, as well as negative original exponents $k$ after their reduction modulo $m$.
>
> Consequently the subgroup
> $$
> C_m=\left\langle\frac{1-\zeta^k}{1-\zeta}:(k,m)=1\right\rangle
> \subseteq\mathcal O_K^\times
> $$
> is well-defined and is the group called cyclotomic units in the terminology of this exercise. No claim that it equals the whole unit group is required.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]

## Notes

- **Source status:** The bound $m\ge3$, the quotient, coprimality condition, and concluding definition were checked at [S4, Ch. I, §7, Exercise 5, printed p. 44, PDF p. 63]. There is no printed hint or source figure.
- **Proof status and inputs:** This is an independent derivation using Bézout's congruence inverse, the geometric-series identity, and closure of algebraic integers under sums and products. Both the element and its inverse are exhibited as integer polynomials in $\zeta$.
- **Boundary:** The proof does not divide inside the integer ring before proving that the resulting quotients are integral. It works even when $1-\zeta$ is a nonunit. It also avoids importing a full integral-basis theorem for cyclotomic fields or an equality between the indicated subgroup and all units.
- **Routing:** Ring Theory is primary because the task is to construct integral units and their inverses explicitly.
