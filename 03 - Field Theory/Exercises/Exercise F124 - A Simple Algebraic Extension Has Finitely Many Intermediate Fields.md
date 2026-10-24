---
title: "Exercise F124: A Simple Algebraic Extension Has Finitely Many Intermediate Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - primitive-elements
  - qualifying-exam
source: "Kent State University, Algebra Qualifying Exam Problems: Field Theory, compiled by Donald L. White, version September 7, 2023, Problem 56, printed p. 5, PDF p. 9"
created: 2026-10-02
---

# Exercise F124: A Simple Algebraic Extension Has Finitely Many Intermediate Fields

## Problem Statement

> [!question] Kent State qualifying-exam problem bank, Problem 56
> Suppose $\alpha$ is algebraic over $F$ and $K=F(\alpha)$. Prove that the collection of fields $E$ with $F\subseteq E\subseteq K$ is finite.
>
> This is a complete mathematical restatement of the source problem. The extension need not be separable or normal.

## Hints

> [!hint]- Hint 1: Attach a polynomial to each intermediate field
> Let $f\in F[X]$ be the monic minimal polynomial of $\alpha$ over $F$. For an intermediate field $E$, let $g_E\in E[X]$ be its monic minimal polynomial over $E$. Show that $g_E$ divides $f$ in $K[X]$.

> [!hint]- Hint 2: Recover the field from polynomial coefficients
> Let $D$ be the field generated over $F$ by all coefficients of $g_E$. Show that $D\subseteq E$ and that $g_E$ remains irreducible over $D$.

> [!hint]- Hint 3: Compare two extension degrees
> Since $K=D(\alpha)=E(\alpha)$, irreducibility gives $[K:D]=\deg g_E=[K:E]$. Use the tower law to prove $D=E$. Then count the monic divisors of $f$ in $K[X]$.

## Solution

> [!success]- Solution
> **Proof scope:** Complete independent derivation
>
> Put $K=F(\alpha)$ and let $f\in F[X]$ be the monic minimal polynomial of $\alpha$ over $F$. Since $\alpha$ is algebraic, $[K:F]=\deg f$ is finite. Consequently every intermediate field $E$ has finite degree over $F$ and $K$ has finite degree over $E$.
>
> **1. Attach a divisor to $E$.** Let
> $$
> g_E(X)=X^d+c_{d-1}X^{d-1}+\cdots+c_0\in E[X]
> $$
> be the monic minimal polynomial of $\alpha$ over $E$. Because $f(\alpha)=0$ and $f\in E[X]$, polynomial division by $g_E$ shows that $g_E\mid f$ in $E[X]$, hence in $K[X]$.
>
> **2. Recover $E$ from the coefficients of $g_E$.** Define
> $$
> D=F(c_0,\ldots,c_{d-1}).
> $$
> All $c_i$ lie in $E$, so $F\subseteq D\subseteq E$. The polynomial $g_E$ belongs to $D[X]$. It is irreducible there: a factorization into positive-degree polynomials over $D$ would also be a factorization over $E$, contradicting its minimal-polynomial property. Since $g_E(\alpha)=0$, it is the minimal polynomial of $\alpha$ over $D$ as well.
>
> We have $K=D(\alpha)$, because $F\subseteq D\subseteq K$ and $K=F(\alpha)$. Likewise $K=E(\alpha)$. Therefore
> $$
> [K:D]=\deg g_E=[K:E].
> $$
> Applying the tower law to $D\subseteq E\subseteq K$ yields
> $$
> [K:D]=[K:E][E:D].
> $$
> The degrees are positive finite integers, so $[E:D]=1$ and
> $$
> E=F(c_0,\ldots,c_{d-1}).
> $$
> Thus the polynomial $g_E$ determines $E$. In particular, the map $E\mapsto g_E$ is injective.
>
> **3. There are finitely many possible divisors.** In the polynomial ring over the field $K$, write the factorization into distinct monic irreducibles as
> $$
> f=\prod_{j=1}^{s}q_j^{e_j}.
> $$
> Every monic divisor of $f$ has the form $\prod_j q_j^{a_j}$ with $0\le a_j\le e_j$, giving precisely $\prod_j(e_j+1)$ possible monic divisors. Step 1 places every $g_E$ in this finite collection, and Step 2 proves that distinct fields give distinct polynomials. Hence there are only finitely many intermediate fields.
>
> This argument permits repeated irreducible factors of $f$ over $K$, so it also proves the result for inseparable simple extensions.

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]

## Notes

- **Source and proof status:** Problem 56 was visually checked in the [official Kent State problem bank](https://www.math.kent.edu/~white/qual/list/field.pdf), version September 7, 2023, printed p. 5 / PDF p. 9. This is a qualifying-exam problem collection, rather than a dated examination paper. The coefficient-field argument is an independent derivation for this vault.
- **The criterion:** [[03 - Field Theory/Exercises/Exercise F123 - Finitely Many Intermediate Fields Imply a Primitive Element|Exercise F123]] proves the reverse implication for every algebraic extension. Combining the two results gives: an algebraic extension is simple if and only if it has finitely many intermediate fields.
- **Method boundary:** Passing to a Galois closure is available for finite separable extensions, but would omit the inseparable cases allowed by the question. The divisor argument works without either separability or normality.
- **Counting boundary:** The divisor count gives an upper bound for the number of intermediate fields; it does not claim that every divisor is a minimal polynomial over some intermediate field.
- **Proof inputs and routing:** The proof uses polynomial division, unique factorization in $K[X]$, the minimal-polynomial degree formula, and the tower law. It does not invoke the fundamental theorem of Galois theory. Field Theory is primary.
