---
title: "Exercise F112: Local Exponential and Logarithm"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - non-archimedean-fields
  - power-series
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 13, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise F112: Local Exponential and Logarithm

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 13
> Let $K$ be a field of characteristic $0$, complete with respect to a non-archimedean absolute value. Show that the series
>
> $$
> \exp(x)=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots,
> $$
>
> $$
> \log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots
> $$
>
> converge in some neighborhood of $0$. (The main problem arises when the characteristic of the residue class field is $p>0$, so that $p$ divides the denominators $n!$ and $n$. Get an expression which determines the power of $p$ occurring in $n!$.) Prove that $\exp$ and $\log$ give mappings inverse to each other, from a neighborhood of $0$ to a neighborhood of $1$.

## Hints

> [!hint]- Hint 1: Restrict the absolute value to integers
> If the residue characteristic is $0$, all nonzero integers are units. If it is $p>0$, then $|m|=|p|^{v_p(m)}$ for every nonzero integer $m$.

> [!hint]- Hint 2: Count factors in a factorial
> Count the multiples of $p,p^2,\ldots$ in $m!$ to obtain $v_p(m!)=\sum_{j\geq1}\lfloor m/p^j\rfloor$.

> [!hint]- Hint 3: Work on one common ball
> Find $\rho>0$ such that for $|x|<\rho$ all terms after the linear term in both series have absolute value strictly less than $|x|$.

## Solution

> [!success]- Solution
> Let $\mathfrak o=\{x\in K:|x|\leq1\}$ and let $k$ be its residue field. If $\operatorname{char}k=0$, every nonzero integer is a unit of $\mathfrak o$, so $|m|=|m!|=1$ for all $m\geq1$. In this case both series converge whenever $|x|<1$.
>
> Suppose $\operatorname{char}k=p>0$. An integer prime to $p$ has nonzero residue and hence absolute value $1$, while $|p|<1$. It follows that $|m|=|p|^{v_p(m)}$ for $m\in\mathbb Z\setminus\{0\}$. Counting how many factors of $m!$ are divisible by each $p^j$ gives Legendre's formula
>
> $$
> v_p(m!)=\sum_{j\geq1}\left\lfloor\frac{m}{p^j}\right\rfloor
> =\frac{m-s_p(m)}{p-1}
> \leq\frac{m-1}{p-1},
> $$
>
> where $s_p(m)$ is the sum of the base-$p$ digits of $m$. Also $v_p(m)\leq v_p(m!)$. Define $\rho=|p|^{1/(p-1)}$ in this case, and put $\rho=1$ when $\operatorname{char}k=0$. For $m\geq1$ and $|x|<\rho$, the factorial and integer bounds give
>
> $$
> \left|\frac{x^m}{m!}\right|
> \leq |x|\left(\frac{|x|}{\rho}\right)^{m-1},
> \qquad
> \left|\frac{x^m}{m}\right|
> \leq |x|\left(\frac{|x|}{\rho}\right)^{m-1}.
> $$
>
> Both right-hand sides tend to $0$ as $m\to\infty$. Over a complete non-Archimedean field, a series converges exactly when its terms tend to $0$, so both displayed series converge for $|x|<\rho$. For $m\geq2$, their terms have absolute value strictly less than $|x|$. The ultrametric inequality therefore gives
>
> $$
> |\exp(x)-1|=|x|,
> \qquad
> |\log(1+x)|=|x|
> \qquad (|x|<\rho).
> $$
>
> Thus $\exp$ maps the open ball $B_\rho(0)$ into $1+B_\rho(0)$, and $\log$ maps $1+B_\rho(0)$ into $B_\rho(0)$. In the formal power-series ring $\mathbb Q[\![T]\!]$, the identities
>
> $$
> \exp(\log(1+T))=1+T,
> \qquad
> \log(\exp(T))=T
> $$
>
> follow by formal differentiation and comparison of constant terms: $\exp'(T)=\exp(T)$ and $\log(1+T)'=(1+T)^{-1}$. On every smaller closed ball $|x|\leq r<\rho$, the coefficient bounds above make the relevant series and their substitutions converge uniformly, so these formal identities may be evaluated in $K$. Hence
>
> $$
> \exp(\log(1+x))=1+x,
> \qquad
> \log(\exp(x))=x
> \qquad(|x|<\rho).
> $$
>
> Therefore $\exp:B_\rho(0)\to1+B_\rho(0)$ and $\log:1+B_\rho(0)\to B_\rho(0)$ are mutually inverse mappings.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Routing:** The task constructs functions on a complete valued field and proves their local inverse relation; Field Theory is primary.
- **Source and proof status:** [S2, Ch. XII, Ex. 13, printed p. 497, PDF p. 512]. The radius, Legendre count, ultrametric estimates, and inverse-map argument are independent derivations. Completeness and the non-Archimedean series criterion are used as stated.
- **Boundary:** The radius $\rho$ is a sufficient common neighborhood. When the absolute value is trivial, $B_1(0)=\{0\}$, and the conclusion has that literal local meaning.
