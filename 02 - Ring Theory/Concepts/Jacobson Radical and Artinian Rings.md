---
title: Jacobson Radical and Artinian Rings
aliases:
  - Jacobson Radical
  - Artinian Rings
  - Left Artinian Rings
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - jacobson-radical
  - artinian-rings
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercises 1–7, printed p. 661, PDF p. 676; §4, printed p. 651, PDF p. 666"
source_status: partially-verified
status: not-started
---

# Jacobson Radical and Artinian Rings

## Definitions

Rings have an identity, and modules are unital left modules. Commutativity is not assumed unless explicitly stated.

> [!info] Jacobson radical
> The **Jacobson radical** of $R$ is
>
> $$
> J(R)=\bigcap_{L\text{ maximal proper left ideal of }R}L.
> $$
>
> Although defined using left ideals, it is a two-sided ideal. Equivalently, it consists of the elements annihilating every simple left $R$-module.

For a nonzero vector $x$ in a simple module $E$, the surjection $R\to E$, $r\mapsto rx$, has a maximal left ideal as its kernel. Thus every radical element kills $x$. Conversely, annihilation of the simple modules $R/L$, tested at $1+L$, forces membership in every maximal left ideal. The annihilator description also proves closure under right multiplication, since $(ar)x=a(rx)$.

> [!info] Left Artinian ring
> A ring $R$ is **left Artinian** if every descending chain of left ideals eventually stabilizes. Equivalently, every nonempty set of left ideals has a minimal member under inclusion.

Lang uses “Artinian” for this left-sided condition in these exercises. A minimal member of a chosen set is not necessarily a minimal nonzero ideal of the whole ring. However, applying the condition to the nonzero left ideals inside a given nonzero left ideal produces a simple left ideal.

## Intuition

The Jacobson radical is invisible on every simple left module. Passing from $R$ to $R/J(R)$ removes this common annihilator. The Artinian condition turns arguments involving successively smaller left ideals into finite arguments: finite intersections capture the radical, and the sequence of radical powers eventually stops changing.

Stabilization of the powers does not by itself prove that the stable power is zero. That last step needs a minimal left ideal and Nakayama's lemma, with finite generation established before the lemma is applied.

## Key Properties

### Quotient and Nakayama properties

Ideal correspondence gives

$$
J(R/J(R))=0,
$$

because every maximal left ideal of $R$ contains $J(R)$. A quotient by a maximal left ideal is used here as a module; that ideal need not be two-sided.

> [!abstract] Nakayama's lemma for left modules
> If $M$ is a finitely generated left $R$-module and $J(R)M=M$, then $M=0$.

The generator-elimination proof works without commutativity. If $a\in J(R)$, the left ideal $R(1-a)$ cannot be proper, so $b(1-a)=1$ for some $b\in R$. In a smallest finite generating set, an expression of the last generator with coefficients in $J(R)$ then eliminates that generator. All coefficients act on the left; no determinant argument is required.

### Nilpotence and the Artinian condition

Every nilpotent two-sided ideal $I$ is contained in $J(R)$. Indeed, on a simple module $E$ the submodule $IE$ is either zero or all of $E$; the latter would give $I^nE=E$ for all $n$, contradicting nilpotence.

If $R$ is left Artinian, then $J(R)$ is nilpotent. A proof without assuming Noetherianity proceeds as follows. Write $N=J(R)$ and let $I=N^s$ be a stable power, so $I^2=I$. If $I\ne0$, choose a minimal left ideal $L\subseteq I$ with $IL\ne0$. A suitable cyclic subideal $Rx\subseteq L$ still has nonzero $I$-action, so $L=Rx$. Moreover $I(IL)=IL\ne0$, so minimality gives $IL=L$, and therefore $NL=L$. Nakayama applied to this cyclic $L$ gives the contradiction $L=0$.

### Connection with semisimplicity

Under Lang's convention, a semisimple ring is nonzero and is semisimple as a left module over itself. For a **nonzero left Artinian ring**,

$$
R\text{ is semisimple}\quad\Longleftrightarrow\quad J(R)=0.
$$

For the nontrivial direction, a minimal finite intersection of maximal left ideals equals the full intersection. When it is zero, the diagonal map embeds $R$ into a finite direct sum of simple quotients, and a submodule of such a sum is semisimple. Conversely, the radical annihilates all simple summands of a semisimple regular module, so it annihilates $1$ and is zero.

Every finite dimensional algebra over a field is left Artinian, since left ideals are vector subspaces. Consequently a nonzero finite dimensional commutative algebra with no nonzero nilpotents is semisimple and is a finite product of finite field extensions. Those field extensions need not be separable.

## Examples

> [!example] Dual numbers
> For a field $k$, let $R=k[\varepsilon]/(\varepsilon^2)$. An element $a+b\varepsilon$ is invertible exactly when $a\ne0$, with inverse $a^{-1}-a^{-2}b\varepsilon$. Thus the unique maximal ideal is $(\varepsilon)$, and $J(R)=(\varepsilon)\ne0$ while $J(R)^2=0$. The ring is Artinian but is not semisimple.

> [!example] Matrix rings and individual nilpotent elements
> Let $R=\operatorname{Mat}_n(k)$, with $n\ge1$. The natural module $k^n$ is simple: a matrix can send any chosen nonzero vector to any desired vector. Its annihilator is zero, so the annihilator characterization gives $J(R)=0$. The ring is finite dimensional, hence Artinian and semisimple. For $n\ge2$, the matrix unit $E_{12}$ is nonzero and has square zero, despite the radical being zero. Thus a nilpotent element need not belong to the Jacobson radical of a noncommutative ring.

> [!example] Finite products of fields
> In $R=K_1\times\cdots\times K_t$ with $t\ge1$, the kernels of the coordinate projections are maximal ideals and have zero intersection. Thus $J(R)=0$. As an $R$-module, $R$ is the finite direct sum of its simple coordinate ideals, so it is Artinian and semisimple.

## Boundaries and Conventions

In a commutative Artinian ring, the Jacobson radical equals the nilradical: radical elements are nilpotent by ideal nilpotence, and a nilpotent element generates a nilpotent ideal contained in the Jacobson radical. Neither implication should be extended to individual elements of an arbitrary noncommutative ring without additional hypotheses.

The zero ring has zero Jacobson radical and satisfies the chain condition, but Lang excludes it from the definition of a semisimple ring. The nonzero qualification in the semisimplicity criterion is therefore intentional. None of the proofs of radical nilpotence above assumes that an Artinian module is finitely generated or invokes Artinian implies Noetherian.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian and Artinian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The radical and Artinian definitions and the stated exercise results were checked against [S2, Ch. XVII, Exercises 1–7, printed p. 661, PDF p. 676]. The semisimple-ring convention was checked at [S2, Ch. XVII, §4, printed p. 651, PDF p. 666]. Lang poses these radical results as exercises, rather than supplying full proofs on the exercise page.

The explanations and examples above are independent deductions. Full proofs of the radical properties, chain arguments, semisimplicity criterion, nilpotence, and commutative product structure are in the linked exercise notes R301–R306. The noncommutative generator-elimination proof of Nakayama is in [[04 - Linear Algebra and Modules/Exercises/Exercise LA484 - Nakayama's Lemma over Noncommutative Rings|LA484]].
