---
title: "Exercise F123: Finitely Many Intermediate Fields Imply a Primitive Element"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - primitive-elements
  - qualifying-exam
source: "Kent State University, Algebra Qualifying Exam Problems: Field Theory, compiled by Donald L. White, version September 7, 2023, Problem 55, printed p. 5, PDF p. 9"
created: 2026-10-02
---

# Exercise F123: Finitely Many Intermediate Fields Imply a Primitive Element

## Problem Statement

> [!question] Kent State qualifying-exam problem bank, Problem 55
> An algebraic extension $K/F$ admits just finitely many fields $E$ satisfying $F\subseteq E\subseteq K$. Prove that $K=F(\theta)$ for some $\theta\in K$.
>
> This is a complete mathematical restatement of the source problem. No finite-degree or separability assumption is imposed.

## Hints

> [!hint]- Hint 1: First justify finite degree
> Every $\alpha\in K$ lies in the intermediate field $F(\alpha)$. Since only finitely many such fields occur, choose one generator for each and adjoin all of them.

> [!hint]- Hint 2: Separate finite and infinite base fields
> If $F$ is finite, the first step makes $K$ a finite field. If $F$ is infinite, examine the family $F(a+cb)$ for $c\in F$ and fixed $a,b\in K$.

> [!hint]- Hint 3: Recover two generators from a repeated field
> Finitely many intermediate fields force $F(a+cb)=F(a+db)$ for some distinct $c,d\in F$. Subtract the two generators to recover $b$, and then recover $a$. Finally combine finitely many generators by induction.

## Solution

> [!success]- Complete independent derivation
> **1. Prove that $K/F$ is finite.** Among the intermediate fields, there are only finitely many distinct fields of the form $F(\alpha)$, with $\alpha\in K$. List these as
> $$
> F(\alpha_1),\ldots,F(\alpha_r).
> $$
> The field $L=F(\alpha_1,\ldots,\alpha_r)$ is contained in $K$. Conversely, every $\alpha\in K$ belongs to one of the listed fields, hence to $L$. Thus $K=L$. Each $\alpha_i$ is algebraic over $F$, so successively adjoining these finitely many elements gives a finite extension, by the minimal-polynomial degree formula and the tower law. In particular, $[K:F]<\infty$.
>
> **2. Handle a finite base field.** If $F$ is finite, finite degree makes $K$ a finite field. The multiplicative group $K^\times$ is cyclic. Choose a generator $\theta$ of that group. Every nonzero element of $K$ is then a power of $\theta$, so $F(\theta)=K$.
>
> The cyclicity used here is the finite-field multiplicative-group theorem, an explicitly imported input; see [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]. This step does not assume the primitive element theorem for arbitrary extensions.
>
> **3. Combine two generators when $F$ is infinite.** Fix $a,b\in K$. For each $c\in F$, define
> $$
> M_c=F(a+cb).
> $$
> These are intermediate fields of $K/F$. Since $F$ is infinite and there are only finitely many intermediate fields, there are distinct $c,d\in F$ with $M_c=M_d$. This common field contains $a+cb$ and $a+db$, and therefore contains
> $$
> b=\frac{(a+cb)-(a+db)}{c-d},
> \qquad a=(a+cb)-cb.
> $$
> Hence $F(a,b)\subseteq M_c$. The reverse inclusion follows from $a+cb\in F(a,b)$, so
> $$
> F(a,b)=F(a+cb).
> $$
>
> **4. Combine all generators.** Step 1 gives $K=F(\alpha_1,\ldots,\alpha_r)$. Starting with $\beta_1=\alpha_1$, apply Step 3 successively to $\beta_{i-1}$ and $\alpha_i$ to obtain $\beta_i\in K$ such that
> $$
> F(\beta_i)=F(\beta_{i-1},\alpha_i)
> =F(\alpha_1,\ldots,\alpha_i).
> $$
> Taking $\theta=\beta_r$ yields $K=F(\theta)$. The argument works without separability. The case $K=F$ is included by taking $\theta=0$.

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source and proof status:** Problem 55 was visually checked in the [official Kent State problem bank](https://www.math.kent.edu/~white/qual/list/field.pdf), version September 7, 2023, printed p. 5 / PDF p. 9. This is a university qualifying-exam problem collection; the collection does not assign this item to a particular examination date. The solution is an independent derivation for this vault.
- **Scope:** Algebraicity is essential to the finite-degree reduction. Finite degree and separability are not hidden assumptions. Counting only strict intermediate fields gives the same finiteness condition, since adjoining the endpoints $F,K$ adds at most two fields.
- **The converse:** [[03 - Field Theory/Exercises/Exercise F124 - A Simple Algebraic Extension Has Finitely Many Intermediate Fields|Exercise F124]] proves that every simple algebraic extension has finitely many intermediate fields, including inseparable cases. Together the two exercises give the exact criterion for an algebraic extension to have a primitive element.
- **Counterexample connection:** [[03 - Field Theory/Exercises/Exercise F122 - A Nonsimple Purely Inseparable Rational Function Extension|Exercise F122]] constructs infinitely many intermediate fields in a finite nonsimple extension. This exercise explains why that field lattice obstructs a primitive element.
- **Proof inputs and routing:** The proof uses the tower law, algebraic-element degree formula, finite-field multiplicative cyclicity, and the pigeonhole principle. It does not use Galois correspondence or the separable primitive element theorem. Field Theory is primary.
