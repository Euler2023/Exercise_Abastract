---
title: "Exercise Gal101: Roots of Unity in Characteristic Prime to 2n and Finite Number of Roots of Unity"
topic: galois-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - galois-theory
  - roots-of-unity
  - cyclotomic-extensions
  - euler-phi
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 17, printed p. 323, PDF p. 338"
created: 2026-09-12
---

# Exercise Gal101: Roots of Unity in Characteristic Prime to 2n and Finite Number of Roots of Unity

## Problem Statement

> [!question] Exercise VI.17
> (a) Let $k$ be a field of characteristic $\nmid 2n$, for some odd integer $n \ge 1$, and let $\zeta$ be a primitive $n$-th root of unity in $k$. Show that $k$ also contains a primitive $2n$-th root of unity.
>
> (b) Let $k$ be a finite extension of the rationals. Show that there is only a finite number of roots of unity in $k$.

## Hints

> [!hint]- Hint 1: Part (a)
> Since $\operatorname{char}(k) \neq 2$, $-1 \neq 1$. Consider the element $-\zeta \in k$. Compute $(-\zeta)^n$ and $(-\zeta)^{2n}$ using the fact that $n$ is odd.

> [!hint]- Hint 2: Part (b)
> If $\zeta_m \in k$ is a primitive $m$-th root of unity, then the cyclotomic subfield $\mathbb Q(\zeta_m)$ is contained in $k$. Relate the degree $[\mathbb Q(\zeta_m) : \mathbb Q] = \varphi(m)$ to $[k : \mathbb Q]$, and use the property that $\lim_{m \to \infty} \varphi(m) = \infty$.

## Solution

> [!success]- Solution
>
> ### (a) Primitive $2n$-th Root of Unity from an Odd $n$-th Root
>
> Let $n \ge 1$ be an odd integer, and let $k$ be a field with $\operatorname{char}(k) \nmid 2n$.
> Since $\operatorname{char}(k) \nmid 2$, we have $-1 \neq 1$ in $k$, so $-1$ has multiplicative order 2 in $k^\times$.
> Let $\zeta \in k$ be a primitive $n$-th root of unity, so the order of $\zeta$ in $k^\times$ is $\operatorname{ord}(\zeta) = n$.
>
> Consider the element
> $$
> \xi = -\zeta = (-1) \cdot \zeta \in k.
> $$
> Since $-1$ and $\zeta$ both lie in $k^\times$, $\xi \in k^\times$.
> We determine the order of $\xi$ in $k^\times$:
> 1. Because $n$ is odd,
>    $$
>    \xi^n = (-\zeta)^n = (-1)^n \zeta^n = (-1) \cdot 1 = -1 \neq 1.
>    $$
> 2. Squaring this yields
>    $$
>    \xi^{2n} = (-1)^2 = 1.
>    $$
>
> Thus the order $d = \operatorname{ord}(\xi)$ divides $2n$, but does not divide $n$ (since $\xi^n = -1 \neq 1$).
> Furthermore,
> $$
> \xi^d = 1 \implies \zeta^d = (-1)^d.
> $$
> Squaring gives $\zeta^{2d} = 1$, which forces $n \mid 2d$.
> Since $n$ is odd, $\gcd(n, 2) = 1$, so $n \mid d$.
> Since $d \mid 2n$ and $n \mid d$, $d$ must be either $n$ or $2n$.
> Because $\xi^n \neq 1$, we must have
> $$
> d = 2n.
> $$
> Therefore, $\xi = -\zeta$ has exact order $2n$ in $k^\times$, which means $-\zeta$ is a primitive $2n$-th root of unity in $k$.
>
> ---
>
> ### (b) Finiteness of Roots of Unity in a Number Field
>
> Let $k$ be a number field of finite degree $d = [k : \mathbb Q]$ over $\mathbb Q$.
> Suppose $\zeta_m \in k$ is a primitive $m$-th root of unity for some positive integer $m$.
> Then the cyclotomic field $\mathbb Q(\zeta_m)$ is an intermediate field:
> $$
> \mathbb Q \subseteq \mathbb Q(\zeta_m) \subseteq k.
> $$
> By the tower law for field extensions,
> $$
> [k : \mathbb Q] = [k : \mathbb Q(\zeta_m)] \cdot [\mathbb Q(\zeta_m) : \mathbb Q].
> $$
> Recall that the degree of the $m$-th cyclotomic field over $\mathbb Q$ is given by Euler's totient function:
> $$
> [\mathbb Q(\zeta_m) : \mathbb Q] = \varphi(m).
> $$
> Therefore, $\varphi(m)$ must divide $d$, and in particular:
> $$
> \varphi(m) \le d.
> $$
>
> We recall the standard asymptotic lower bound for Euler's totient function: for all $m \ge 3$,
> $$
> \varphi(m) \ge \sqrt{\frac{m}{2}}.
> $$
> *(Indeed, for $m = \prod p_i^{r_i}$, each prime factor satisfies $p_i^{r_i-1}(p_i - 1) \ge \sqrt{p_i^{r_i}}$ except possibly $p=2$ with $r_1=1$, giving $\varphi(m) \ge \sqrt{m/2}$.)*
>
> Consequently,
> $$
> \sqrt{\frac{m}{2}} \le \varphi(m) \le d \implies m \le 2d^2.
> $$
> This establishes that $m$ is bounded above by $2d^2$. In particular, there are only finitely many integers $m \ge 1$ such that $\varphi(m) \le d$.
>
> For each such integer $m$, the equation $X^m - 1 = 0$ has at most $m$ roots in $k$.
> The set of all roots of unity in $k$ is a subset of the union of the sets of $m$-th roots of unity for the finitely many integers $m \le 2d^2$.
> As a finite union of finite sets, the total number of roots of unity in $k$ is finite.
> *(In fact, the roots of unity in $k$ form a finite subgroup of $k^\times$, which must be cyclic of some order $M \le 2d^2$.)*

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Routing:** Galois Theory is primary because cyclotomic fields and root-of-unity structure drive abelian extensions and Kummer theory.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 17, printed p. 323, PDF p. 338.
