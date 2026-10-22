---
title: 'Exercise R387: Integral Closure Localized at a Valuation Prime'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 6, printed p. 166, PDF p. 185
source_refs:
- S4/ch-II/sec-8/ex-6
created: '2026-10-23'
---

# Exercise R387: Integral Closure Localized at a Valuation Prime

## Problem Statement

> [!question] Neukirch II.8.6
> Let $L/K$ be finite, $v$ a nonarchimedean exponential valuation and $w$ an extension to $L$. If $\mathcal O$ is the integral closure of the valuation ring $\mathfrak o$ in $L$, then $\mathcal O_P$, for $P=\{a\in\mathcal O:w(a)>0\}$, is the valuation ring of $w$.

## Hints

> [!hint]- Hint 1
> An element is integral over a valuation ring exactly when it has nonnegative value at every extension of the valuation.

> [!hint]- Hint 2
> For $x$ integral at the selected place only, use approximation to find b which is a unit there and very small at all other extensions; both b and bx then become globally integral.

## Solution

> [!success]- Independent derivation and stated source corrections
> List the finitely many distinct extensions $w_1=w,w_2,\ldots,w_r$ of $v$ to $L$; their existence and finiteness follow from the local-embedding description in II §8. We first justify the integrality test: $z\in L$ is integral over $\mathfrak o$ if and only if $w_i(z)\ge0$ for all $i$. A root of a monic equation with integral coefficients cannot have negative value, since its leading term would be the unique term of least value. Conversely, if all these values are nonnegative, place all conjugates of $z$ in an algebraic closure with one extension of $v$. Their values are nonnegative, since every conjugate embedding induces one of the listed extensions. The coefficients of the minimal polynomial are elementary symmetric functions of these roots, counting inseparable multiplicities if necessary, so have nonnegative value and lie in $\mathfrak o$. This proves the test without assuming separability.
>
> It follows that $P$ is a prime ideal and $\mathcal O_P$ lies in the valuation ring $\mathfrak o_w$: integral numerators have nonnegative value, and denominators outside $P$ have value zero.
>
> For the reverse inclusion take $x\in L$ with $w_1(x)\ge0$; $x=0$ is immediate. The extensions $w_i$ are pairwise inequivalent: if their multiplicative forms differed by a positive power, restriction to the nontrivially valued base would force that power to be one. The approximation theorem (3.4) therefore gives $b\in L$ sufficiently close to $1$ at $w_1$ and to $0$ at all other $w_i$, with
> $$
> w_1(b)=0,\qquad w_i(b)>\max\{0,-w_i(x)\}\quad(i>1).
> $$
> Both $b$ and $bx$ then have nonnegative value at every extension, hence belong to $\mathcal O$ by the test. Moreover $b\notin P$, and $x=(bx)/b\in\mathcal O_P$. This proves equality, for arbitrary rank-one nonarchimedean valuations and finite extensions, including purely inseparable ones. No Noetherian or discrete hypothesis has been inserted.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 6, printed p. 166, PDF p. 185].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
