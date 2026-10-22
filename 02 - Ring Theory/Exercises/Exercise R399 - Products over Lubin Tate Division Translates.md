---
title: 'Exercise R399: Products over Lubin Tate Division Translates'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 2, printed p. 351, PDF p. 370
source_refs:
- S4/ch-V/sec-5/ex-2
created: '2026-10-23'
---

# Exercise R399: Products over Lubin Tate Division Translates

## Problem Statement

> [!question] Neukirch V.5.2
> If $h(X)$ is a power series in $S$, then the power series
> $$
> h_1(X)=\prod_{\lambda\in F(1)}h(X+_F\lambda)
> $$
> also belongs to $S$, and one has $h_1(X+_F\lambda)=h_1(X)$ for all $\lambda\in F(1)$.

## Hints

> [!hint]- Hint 1
> The product has only $q$ factors. Its coefficients are integral in the first division field.

> [!hint]- Hint 2
> Galois acts by permuting the division points, and formal translation by a fixed division point also permutes them.

## Solution

> [!success]- Independent derivation
> Write $\mathfrak o=\mathfrak o_K$, $S=\mathfrak o[[X]]$, $e=[\pi]_F$, and $F(n)=\ker[\pi^n]_F$. Source Proposition (5.2) gives $\#F(n)=q^n$, and Theorem (5.4) gives the totally ramified Galois division fields and their scalar action. Evaluating a bounded integral series at division points of positive valuation is legitimate; coefficients after translating $X$ by such a point are convergent $p$-adic sums. The notation $X+_F\lambda$ means $F(X,\lambda)$, not ordinary addition.
>
> Let $L_1=K(F(1))$. Each translated series $h(F(X,\lambda))$ has coefficients in $\mathfrak o_{L_1}$: at every fixed power of $X$, the defining infinite sum converges because $\lambda$ has positive valuation and all input coefficients are integral. There are $q$ division points, so their finite product lies in $\mathfrak o_{L_1}[[X]]$.
>
> For $\sigma\in\operatorname{Gal}(L_1/K)$, the coefficients of $F$ and $h$ are fixed and $\sigma$ permutes $F(1)$. Therefore
> $$
> \sigma(h_1(X))=\prod_{\lambda\in F(1)}h(F(X,\sigma\lambda))=h_1(X).
> $$
> Every coefficient is both in $K$ and integral, hence belongs to $\mathfrak o_K$. Thus $h_1\in S$.
>
> For $\mu\in F(1)$, associativity of the formal group gives
> $$
> \begin{aligned}
> h_1(X+_F\mu)
> &=\prod_{\lambda\in F(1)}h(F(F(X,\mu),\lambda))\\
> &=\prod_{\lambda\in F(1)}h(F(X,F(\mu,\lambda))).
> \end{aligned}
> $$
> The map $\lambda\mapsto\mu+_F\lambda$ is a permutation of the finite group $F(1)$. The last product is therefore $h_1(X)$, proving the invariance.
>
> When $h$ is constant $c$, the product is $c^q$, giving an immediate check. When $h=1$ the product is $1$; no unit hypothesis is needed for the general construction.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The exercise and all printed subparts were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, printed pp. 351–352, PDF pp. 370–371]. The division-point modules and their field/Galois description were checked at [Proposition (5.2), Theorem (5.4), printed pp. 347–349, PDF pp. 366–368]. No source figure is needed.
- **Proof scope:** Independent coefficient-integrality, Galois-invariance and translation-permutation arguments. Formal substitutions with nonzero constant division points are interpreted by their convergent integral coefficients, not by unrestricted formal substitution in an arbitrary ring.
