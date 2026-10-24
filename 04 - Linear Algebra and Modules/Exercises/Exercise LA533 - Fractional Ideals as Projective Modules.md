---
title: "Exercise LA533: Fractional Ideals as Projective Modules"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - neukirch-algebraic-number-theory
  - projective-module
  - fractional-ideals
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 10, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise LA533: Fractional Ideals as Projective Modules

## Problem Statement

> [!question] Neukirch I.3.10
> The fractional ideals $\mathfrak a$ of a Dedekind domain $\mathfrak o$ are projective $\mathfrak o$-modules, i.e., given any surjective homomorphism $M\xrightarrow{f}N$ of $\mathfrak o$-modules, each homomorphism $\mathfrak a\xrightarrow{g}N$ can be lifted to a homomorphism $h:\mathfrak a\to M$ such that $f\circ h=g$.

## Hints

> [!hint]- Hint 1: Use ideal invertibility
> Let $K=\operatorname{Frac}(\mathfrak o)$. The inverse fractional ideal is $\mathfrak a^{-1}=\{b\in K:b\mathfrak a\subseteq\mathfrak o\}$, and $\mathfrak a\mathfrak a^{-1}=\mathfrak o$. Express $1$ as a finite sum $\sum_i a_i b_i$, where $a_i\in\mathfrak a$ and $b_i\in\mathfrak a^{-1}$.

> [!hint]- Hint 2: Replace a basis by coordinate maps
> For each $i$, multiplication by $b_i$ defines an $\mathfrak o$-linear map $\lambda_i:\mathfrak a\to\mathfrak o$. Check that $x=\sum_i a_i\lambda_i(x)$ for every $x\in\mathfrak a$.

> [!hint]- Hint 3: Lift only finitely many elements
> Choose $m_i\in M$ with $f(m_i)=g(a_i)$. Define $h(x)=\sum_i\lambda_i(x)m_i$ and verify both linearity and $f\circ h=g$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Write $A=\mathfrak o$ and $K=\operatorname{Frac}(A)$. By the source definition, a fractional ideal $\mathfrak a$ is nonzero. The ideal-group theorem for a Dedekind domain gives
> $$
> \mathfrak a^{-1}=\{b\in K:b\mathfrak a\subseteq A\},
> \qquad \mathfrak a\mathfrak a^{-1}=A.
> $$
> The definition of an ideal product as finite sums of products therefore supplies $r\ge1$ and elements $a_i\in\mathfrak a$, $b_i\in\mathfrak a^{-1}$ such that
> $$
> 1=\sum_{i=1}^r a_i b_i.
> $$
>
> **1. Construct coordinate maps without assuming that the ideal is principal.** For $x\in\mathfrak a$, put
> $$
> \lambda_i(x)=b_i x.
> $$
> This belongs to $A$ by the definition of $\mathfrak a^{-1}$. For $c,d\in A$ and $x,y\in\mathfrak a$,
> $$
> \lambda_i(cx+dy)=c\lambda_i(x)+d\lambda_i(y).
> $$
> Thus $\lambda_i$ is $A$-linear. Multiplying the identity for $1$ by $x$ gives
> $$
> x=\sum_{i=1}^r a_i\lambda_i(x).
> $$
>
> **2. Construct the required lift.** Let $f:M\twoheadrightarrow N$ and $g:\mathfrak a\to N$ be the given $A$-linear maps. Surjectivity permits a choice of $m_i\in M$ for each of the finitely many $a_i$ with
> $$
> f(m_i)=g(a_i).
> $$
> Define
> $$
> h:\mathfrak a\longrightarrow M,
> \qquad h(x)=\sum_{i=1}^r\lambda_i(x)m_i.
> $$
> Each coefficient $\lambda_i(x)$ is in $A$, so scalar multiplication in $M$ makes this well-defined; no multiplication of an arbitrary element of $K$ with an element of $M$ is being assumed. The linearity of the $\lambda_i$ gives the linearity of $h$. Finally,
> $$
> \begin{aligned}
> f(h(x))
> &=\sum_{i=1}^r\lambda_i(x)f(m_i)\\
> &=\sum_{i=1}^r\lambda_i(x)g(a_i)\\
> &=g\!\left(\sum_{i=1}^r a_i\lambda_i(x)\right)
> =g(x).
> \end{aligned}
> $$
> Hence $f\circ h=g$, proving the required projectivity directly from its lifting definition.
>
> **3. A finite free-module splitting describes the same construction.** Define
> $$
> \pi:A^r\to\mathfrak a,\qquad (c_i)\mapsto\sum_i c_i a_i,
> \qquad s:\mathfrak a\to A^r,\qquad x\mapsto(\lambda_i(x))_i.
> $$
> The identity in Step 1 says $\pi\circ s=\operatorname{id}_{\mathfrak a}$. For any $v\in A^r$,
> $$
> v=s(\pi(v))+\bigl(v-s(\pi(v))\bigr),
> \qquad v-s(\pi(v))\in\ker\pi.
> $$
> If $s(x)\in\ker\pi$, applying $\pi$ gives $x=0$. It follows that
> $$
> A^r=s(\mathfrak a)\oplus\ker\pi.
> $$
> Thus $\mathfrak a$ is a direct summand of a finite free module, with an explicit splitting. This also proves finite generation by the $a_i$. The splitting is a consequence of invertibility, not an assumption that $\mathfrak a$ has a basis over $A$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Source verification:** The complete exercise statement was visually checked at [S4, Ch. I, §3, Exercise 10, printed p. 23, PDF p. 42]. The exercises precede the §4 body heading on that page and belong to §3 despite the running header. No source figure is needed.
- **Proof status and inputs:** The solution is an independent derivation. The fractional-ideal definition, the formula for the inverse, and the group property were visually checked at [S4, Ch. I, §3, Definition (3.7) and Proposition (3.8), printed pp. 21–22, PDF pp. 40–41]. The source states the present projectivity conclusion as an exercise; it does not supply the lift written above. The finite-coordinate identity, the lift and the free-module splitting are proved here.
- **Scope:** The same argument works for any invertible fractional ideal of a commutative domain; the Dedekind hypothesis supplies invertibility for every nonzero fractional ideal. No finiteness assumption on $M$ or $N$ is needed. If the zero module is also allowed as an ideal by another convention, it is projective by the unique zero lift, but it is excluded from the source's fractional-ideal group.
- **Routing:** The main task is to construct a module homomorphism with a specified lifting property and an explicit free-module splitting. Linear Algebra and Modules is therefore primary; ideal arithmetic provides the input identity.
