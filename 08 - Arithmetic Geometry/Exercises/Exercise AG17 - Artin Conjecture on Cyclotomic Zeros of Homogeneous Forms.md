---
title: "Exercise AG17: Artin Conjecture on Cyclotomic Zeros of Homogeneous Forms"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 30, printed p. 256, PDF p. 271"
created: 2026-09-06
---

# Exercise AG17: Artin Conjecture on Cyclotomic Zeros of Homogeneous Forms

## Problem Statement

> [!question] Lang, Chapter V, Exercise 30
> The answer to the following exercise is not known.
>
> **(Artin conjecture).** Let $f$ be a homogeneous polynomial of degree $d$ in $n$ variables, with rational coefficients. If $n>d$, show that there exists a root of unity $\zeta$, and elements
> $$
> x_1,\ldots,x_n\in\mathbb Q[\zeta]
> $$
> not all $0$ such that $f(x_1,\ldots,x_n)=0$.

> [!warning] Source issue
> The word “show” does not make this an established theorem: the source explicitly labels the answer unknown. The Solution section records this boundary and proves only the stated low-degree special cases.

## Hints

> [!hint]- Hint 1
> Read this as a conjecture, as the source explicitly states. For a verified starting point, treat degrees one and two.

> [!hint]- Hint 2
> For a quadratic form over $\mathbb Q$, diagonalize and use a quadratic extension; every quadratic extension of $\mathbb Q$ is cyclotomic.

## Solution

> [!success]- Solution and proof status
> **Proof status.** The general assertion is archived as a conjecture. No general proof is supplied or claimed. The source explicitly calls its answer unknown. The related formulation that $\mathbb Q^{\mathrm{ab}}$ is a $C_1$ field is also presented as a conjecture in Hélène Esnault's *Rational points over $C_1$ fields*, §1. That stronger field-wide formulation implies the displayed exercise, since every finite family of elements of $\mathbb Q^{\mathrm{ab}}$ lies in a cyclotomic field. This note does not assert an equivalence between the rational-coefficient exercise and every possible field-wide formulation.
>
> Here are independently justified special cases.
>
> **Degree one.** Write $f=\sum_{j=1}^n a_jX_j$ with $n\ge2$. The linear map $\mathbb Q^n\to\mathbb Q$ has kernel of dimension at least $n-1>0$, so it has a nonzero rational zero. One may take $\zeta=1$.
>
> **Degree two.** A rational change of variables diagonalizes a quadratic form in characteristic zero:
> $$
> f\sim a_1Y_1^2+\cdots+a_rY_r^2,\qquad a_j\in\mathbb Q^\times,\quad r\le n.
> $$
> If $r<n$, a coordinate in its radical already gives a nonzero rational zero. If $r=n$, then $n>2$ supplies at least two nonzero diagonal entries. Choose $\gamma$ with
> $$
> \gamma^2=-a_2/a_1.
> $$
> The vector $(\gamma,1,0,\ldots,0)$ is a nonzero zero over the extension $\mathbb Q(\gamma)$, of degree at most two. Every quadratic extension of $\mathbb Q$ is contained in a cyclotomic field, so this vector, and its inverse rational change of coordinates, have coordinates in some $\mathbb Q(\zeta)$. This proves the exercise for degree two using the explicitly named quadratic cyclotomic input.
>
> These special cases do not settle higher degrees. The strict condition $n>d$ alone does not provide a construction in general.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/C1 Fields and Cyclotomic Zeros|C1 Fields and Cyclotomic Zeros]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- **Degree convention:** The conjecture concerns positive degree $d$. A nonzero constant, if allowed with $d=0$, would be an immediate counterexample to the literal unrestricted wording.

- **Routing:** This is an arithmetic existence problem for rational points over cyclotomic fields; its conjectural nature prevents routing it by a nonexistent general computation.
- **External literature:** [Hélène Esnault, *Rational points over $C_1$ fields*, §1](https://page.mi.fu-berlin.de/esnault/preprints/helene/149_manin.pdf) supplies the field-wide conjectural context. It is not a solution to the exercise.
- **Imported inputs for the quadratic special case:** Diagonalization of quadratic forms over a field of characteristic not two, and the quadratic Kronecker–Weber statement proved in [S2, Ch. VI, §3, printed pp. 281–282, PDF pp. 296–297]. The full Kronecker–Weber theorem is used only to identify the contextual field $\mathbb Q^{\mathrm{ab}}$ with the union of cyclotomic fields, not to prove the quadratic case.
- **Archive versus learning status:** This source-identified conjecture note is archived, but its learning status remains not-started and its general proof status remains conjectural. No completion of the conjecture is implied by chapter coverage.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 30, printed p. 256, PDF p. 271]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
