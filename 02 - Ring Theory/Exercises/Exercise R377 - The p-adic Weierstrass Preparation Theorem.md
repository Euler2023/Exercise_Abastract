---
title: 'Exercise R377: The p-adic Weierstrass Preparation Theorem'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 9, printed p. 116, PDF p. 135
source_refs:
- S4/ch-II/sec-2/ex-9
created: '2026-10-23'
---

# Exercise R377: The p-adic Weierstrass Preparation Theorem

## Problem Statement

> [!question] Neukirch II.2.9
> Every nonzero power series $f(X)=\sum_{\nu=0}^{\infty}a_\nu X^\nu\in\mathbb Z_p[[X]]$ admits a unique representation $f(X)=p^\mu P(X)U(X)$, where $U$ is a unit in $\mathbb Z_p[[X]]$ and $P\in\mathbb Z_p[X]$ is monic and satisfies $P(X)\equiv X^n\pmod p$.

## Hints

> [!hint]- Hint 1
> First divide by the smallest $p$-adic valuation among the nonzero coefficients.

> [!hint]- Hint 2
> For the primitive series $h$, divide $X^n$ by $h$ using Exercise 8. Reduce that division modulo $p$.

## Solution

> [!success]- Independent derivation and stated source corrections
> Let $\mu=\min_\nu v_p(a_\nu)$, omitting zero coefficients, and put $h=p^{-\mu}f$. Let $n$ be the smallest index whose coefficient in $h$ is a unit. Then $\bar h=X^n\bar V$ in $\mathbb F_p[[X]]$, where $\bar V$ is a unit. The independently proved division theorem, Exercise II.2.8, gives $X^n=qh+r$, $\deg r<n$. Reducing modulo $p$ shows
> $$
> X^n=\bar q X^n\bar V+\bar r.
> $$
> Comparison of degrees below $n$ gives $\bar r=0$; cancellation of $X^n$ then gives $\bar q\bar V=1$. Thus $q$ is a unit in $\mathbb Z_p[[X]]$. Set $P=X^n-r$ and $U=q^{-1}$. Then $P$ is monic, $P\equiv X^n\pmod p$, and $h=PU$, proving existence.
>
> For uniqueness, the smallest coefficient valuation in $PU$ is zero, because $\bar P\bar U=X^n\bar U\ne0$. Thus $\mu$ is forced. The order of $\bar h$ forces $n$. Suppose $h=PU=P'U'$ with both distinguished monic polynomials of degree $n$. Polynomial division by the monic $P'$ gives $P=P'+R$, $\deg R<n$, since their leading coefficients agree. In the power series ring, $P=(U'/U)P'+0$ is another division by $P'$. Exercise 8 gives uniqueness of quotient and remainder, so $R=0$ and $U'/U=1$. Hence $P=P'$ and $U=U'$. If $n=0$, the distinguished polynomial is $1$, and the primitive series itself is the unit. The exclusion of $f=0$ is necessary, because its coefficient minimum would be undefined.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 9, printed p. 116, PDF p. 135].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
- Exercise 9 lies on the second page of the §2 exercise group, immediately above the §3 heading; it must not be omitted from the source count.
