---
title: "Exercise F125: A Separable Extension with Bounded Element Degrees"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - primitive-elements
  - separable-extensions
  - qualifying-exam
source: "Kent State University, Algebra Qualifying Exam Problems: Field Theory, compiled by Donald L. White, version September 7, 2023, Problem 74, printed p. 6, PDF p. 10"
created: 2026-10-02
---

# Exercise F125: A Separable Extension with Bounded Element Degrees

## Problem Statement

> [!question] Kent State qualifying-exam problem bank, Problem 74
> Fix an integer $n\ge1$ and let $K/F$ be a separable extension, without assuming $[K:F]$ finite. For each $\alpha\in K$, suppose there is a nonzero polynomial $f_\alpha\in F[X]$ such that
> $$
> f_\alpha(\alpha)=0,\qquad \deg f_\alpha\le n.
> $$
> Prove that some $\theta\in K$ satisfies $K=F(\theta)$ and $[K:F]\le n$.
>
> This is a complete mathematical restatement of the source problem. The nonzero-polynomial convention implicit in its degree condition is made explicit below.

## Hints

> [!hint]- Hint 1: Bound each element's degree
> The minimal polynomial of $\alpha$ divides $f_\alpha$, so every degree $[F(\alpha):F]$ lies in $\{1,\ldots,n\}$.

> [!hint]- Hint 2: Choose an element of maximal degree
> Choose $\theta\in K$ for which $[F(\theta):F]$ is largest. This maximum exists because the possible degrees belong to a nonempty finite set of integers.

> [!hint]- Hint 3: Apply the theorem to a smaller extension
> For arbitrary $\alpha\in K$, the field $E=F(\theta,\alpha)$ is a finite separable extension of $F$. Apply the primitive element theorem to $E/F$, then compare its degree with the maximal degree of $F(\theta)/F$.

## Solution

> [!success]- Complete independent derivation
> **1. Obtain a uniform bound for simple subextensions.** For each $\alpha\in K$, the assumed nonzero annihilating polynomial proves that $\alpha$ is algebraic over $F$. Let $m_\alpha\in F[X]$ be its monic minimal polynomial. Polynomial division gives $m_\alpha\mid f_\alpha$, hence
> $$
> [F(\alpha):F]=\deg m_\alpha\le\deg f_\alpha\le n.
> $$
> Thus
> $$
> \mathcal D=\{[F(\alpha):F]:\alpha\in K\}
> \subseteq\{1,\ldots,n\}.
> $$
> This set is nonempty, since $0\in K$ and $[F(0):F]=1$. Choose its maximum $m$ and an element $\theta\in K$ satisfying $[F(\theta):F]=m$.
>
> **2. Show that adjoining any other element changes nothing.** Fix arbitrary $\alpha\in K$ and set
> $$
> E=F(\theta,\alpha).
> $$
> Both generators are algebraic, so $E/F$ is finite. Since $K/F$ is separable, every element of $E$ is separable over $F$, and $E/F$ is separable. We now use the finite separable primitive element theorem: every finite separable extension $L/F$ has the form $L=F(\eta)$ for some $\eta\in L$. Its statement and proof are given in [[03 - Field Theory/Concepts/Primitive Elements#Primitive Element Theorem|Primitive Elements]].
>
> Applying that theorem to $E/F$ gives $E=F(\eta)$ with $\eta\in E\subseteq K$. Maximality of $m$ therefore implies
> $$
> [E:F]=[F(\eta):F]\le m.
> $$
> On the other hand, $F(\theta)\subseteq E$ and the tower law gives
> $$
> [E:F]=[E:F(\theta)]\,[F(\theta):F]
> =[E:F(\theta)]\,m.
> $$
> Combining the two equalities and inequalities forces $[E:F(\theta)]=1$. Hence $E=F(\theta)$ and $\alpha\in F(\theta)$.
>
> **3. Finish.** Since $\alpha\in K$ was arbitrary, $K\subseteq F(\theta)$. The reverse inclusion follows from $\theta\in K$, so
> $$
> K=F(\theta),\qquad [K:F]=m\le n.
> $$
> In particular, finiteness of $K/F$ is a conclusion, not a prerequisite used before it has been proved.

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

> [!info] Source convention: nonzero annihilating polynomials
> The source says each element is a root of a polynomial in $F[x]$ of degree at most $n$, without explicitly writing “nonzero.” The solution uses nonzero polynomials, as intended by the ordinary degree convention. If the zero polynomial were allowed with degree $-\infty$, the condition would be vacuous: for example, the infinite separable extension $\overline{\mathbb Q}/\mathbb Q$ would satisfy it while the conclusion would fail. The restatement makes this convention explicit; it does not add a finite-degree assumption.

- **Source and proof status:** Problem 74 was visually checked in the [official Kent State problem bank](https://www.math.kent.edu/~white/qual/list/field.pdf), version September 7, 2023, printed p. 6 / PDF p. 10. The collection does not specify an examination date for this item. The maximal-degree argument is an independent derivation for this vault, with the finite separable primitive element theorem as an explicitly named input.
- **Why separability matters:** In [[03 - Field Theory/Exercises/Exercise F122 - A Nonsimple Purely Inseparable Rational Function Extension|Exercise F122]], the extension $\mathbb F_p(x,y)/\mathbb F_p(x^p,y^p)$ has total degree $p^2$, although every element has degree at most $p$. It is neither simple nor of total degree at most $p$, so the result fails if separability is omitted.
- **Method boundary:** One cannot apply the finite separable primitive element theorem directly to $K/F$ before proving finite degree. The proof applies it only to the verified finite subextensions $F(\theta,\alpha)/F$.
- **Routing:** The argument compares degrees of generated subfields and uses the primitive element theorem; Field Theory is primary.
