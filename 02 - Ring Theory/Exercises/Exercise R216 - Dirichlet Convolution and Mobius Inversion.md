---
title: "Exercise R216: Dirichlet Convolution and Mobius Inversion"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - dirichlet-convolution
  - multiplicative-functions
  - mobius-inversion
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 12, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R216: Dirichlet Convolution and Mobius Inversion

## Problem Statement

> [!question] Exercise 12
> Let $P$ be the set of positive integers and $R$ the set of functions from $P$ to a commutative ring $K$. Define addition pointwise and define the convolution product by
>
> $$
> (f*g)(m)=\sum_{xy=m}f(x)g(y),
> $$
>
> where the sum runs over all pairs of positive integers $(x,y)$ with $xy=m$.
>
> **(a)** Show that $R$ is a commutative ring whose unit is the function $\delta$ such that $\delta(1)=1$ and $\delta(x)=0$ for $x\ne1$.
>
> **(b)** A function $f$ is multiplicative if $f(mn)=f(m)f(n)$ whenever $m,n$ are relatively prime. If $f,g$ are multiplicative, show that $f*g$ is multiplicative.
>
> **(c)** Let $\mu$ be the Möbius function, with $\mu(1)=1$, $\mu(p_1\cdots p_r)=(-1)^r$ for distinct primes $p_1,\ldots,p_r$, and $\mu(m)=0$ if $m$ is divisible by $p^2$ for some prime $p$. Show that
>
> $$
> \mu*\varphi_1=\delta,
> $$
>
> where $\varphi_1$ is the constant function with value $1$. Thus the Möbius inversion formula is the relation $\mu*\varphi_1*f=f$.

## Hints

> [!hint]- Source hint
> First show that $\mu$ is multiplicative, and then prove $\mu*\varphi_1=\delta$ on prime powers.

## Solution

> [!success]- Solution
> **(a)** For every $m$, only finitely many pairs satisfy $xy=m$, so convolution is well defined. Commutativity follows by interchanging $x$ and $y$. Distributivity follows term by term. For associativity,
>
> $$
> ((f*g)*h)(m)
> =\sum_{abc=m}f(a)g(b)h(c)
> =(f*(g*h))(m).
> $$
>
> Finally, the only nonzero contribution to $(\delta*f)(m)$ has $x=1$ and $y=m$, so
>
> $$
> (\delta*f)(m)=f(m).
> $$
>
> Pointwise addition supplies the additive group and zero function. Hence $R$ is a commutative ring with identity $\delta$.
>
> **(b)** Write convolution as a divisor sum:
>
> $$
> (f*g)(m)=\sum_{d\mid m}f(d)g(m/d).
> $$
>
> If $\gcd(m,n)=1$, every divisor of $mn$ is uniquely $d_1d_2$ with $d_1\mid m$ and $d_2\mid n$. The relevant pairs are coprime, so multiplicativity of $f$ and $g$ gives
>
> $$
> \begin{aligned}
> (f*g)(mn)
> &=\sum_{d_1\mid m}\sum_{d_2\mid n}
> f(d_1d_2)g\left(\frac m{d_1}\frac n{d_2}\right)\\
> &=\left(\sum_{d_1\mid m}f(d_1)g(m/d_1)\right)
> \left(\sum_{d_2\mid n}f(d_2)g(n/d_2)\right)\\
> &=(f*g)(m)(f*g)(n).
> \end{aligned}
> $$
>
> Thus $f*g$ is multiplicative.
>
> **(c)** If $m,n$ are coprime, either one contains a squared prime, in which case both $\mu(mn)$ and $\mu(m)\mu(n)$ vanish, or both are squarefree with disjoint prime factors, in which case the signs multiply. Hence $\mu$ is multiplicative. Since $\varphi_1$ is also multiplicative, part (b) shows that $\mu*\varphi_1$ is multiplicative.
>
> At $1$ its value is $1$. For a prime power $p^k$ with $k\ge1$,
>
> $$
> (\mu*\varphi_1)(p^k)
> =\sum_{j=0}^k\mu(p^j)
> =1-1=0,
> $$
>
> because $\mu(p^j)=0$ for $j\ge2$. Multiplicativity now gives
>
> $$
> \mu*\varphi_1=\delta
> $$
>
> on every positive integer. Associativity then yields
>
> $$
> \mu*\varphi_1*f=\delta*f=f,
> $$
>
> which is Möbius inversion in convolution form.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion|Dirichlet Convolution and Möbius Inversion]]

## Notes

- **Routing:** The principal construction is a new commutative ring structure on arithmetic functions, so Ring Theory is primary despite the number-theoretic examples.
- **Finite-sum boundary:** Each convolution value is a finite sum because a positive integer has finitely many divisors; no convergence hypothesis is involved.
- **Source status:** All three parts and the source hint were visually checked at [S2, Ch. II, Ex. 12, printed p. 116, PDF p. 131]. The proof is independent.
