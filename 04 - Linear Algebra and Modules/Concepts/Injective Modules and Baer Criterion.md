---
title: Injective Modules and Baer Criterion
aliases:
  - Baer's Criterion
  - Divisible Modules
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercises 19-26, printed pp. 830-831, PDF pp. 845-846"
source_status: verified
status: not-started
created: 2026-09-29
---

# Injective Modules and Baer Criterion

## Definition

A left $A$-module $Q$ is **injective** if every linear map $M'\to Q$ from a submodule $M'\subseteq M$ extends to $M\to Q$. Equivalently, $\operatorname{Hom}_A(-,Q)$ takes short exact sequences to short exact sequences in the reverse direction.

**Baer's criterion:** $Q$ is injective if and only if every homomorphism from a left ideal $J\subseteq A$ to $Q$ extends to $A$.

For a domain $A$, a module $Q$ is **divisible** if $aQ=Q$ for every $0\ne a\in A$.

## Intuition and Proof Mechanism

Injectivity asks for compatible extension across every inclusion. Baer's criterion reduces this to ideals: if a map is already defined on $N\subseteq M$, adjoining $x\in M\setminus N$ only imposes relations from the ideal $\{a:ax\in N\}$. Extending on that ideal allows extension to $N+Ax$. Zorn's lemma then gives an extension over all of $M$. This argument is proved in full in the linked XX.23 exercise.

## Key Properties

1. Over a PID, injective is equivalent to divisible: ideals are principal, and extending a map from $aA$ is precisely solving $ay=q$.
2. Products and direct summands of injective modules are injective. An inclusion whose source is injective splits.
3. Over a commutative Noetherian ring, localization preserves injectivity. The proof uses finite presentations of ideals to commute localized Hom with Hom after localization.
4. For such a ring and an ideal $\mathfrak a$, the $\mathfrak a$-power torsion submodule of an injective is injective. Its proof requires an intersection estimate, proved via the Noetherian Rees ring.
5. For a commutative ring, the character module $E^\wedge=\operatorname{Hom}_{\mathbb Z}(E,\mathbb Q/\mathbb Z)$ is injective exactly when $E$ is flat.

## Examples

$\mathbb Q$ and $\mathbb Q/\mathbb Z$ are injective abelian groups because they are divisible. $\mathbb Z$ is not injective: the map $2\mathbb Z\to\mathbb Z$, $2n\mapsto n$, cannot extend to $\mathbb Z$.

The group $\mathbb Q/\mathbb Z$ is also a **cogenerator**: every nonzero element of an abelian group is detected by a character to it. Define a nonzero character on the cyclic subgroup, then extend by injectivity. This is why character duality reflects exactness.

Divisibility is not asserted equivalent to injectivity over an arbitrary ring. Products of injectives and sums of projectives have different universal properties; they should not be interchanged.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext]]
- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups]]
- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The problems and their hypotheses were checked in [S2, Ch. XX, Exercises 19–26, printed pp. 830–831, PDF pp. 845–846]. All properties above are proved independently in the linked exercise notes. XX.23's one-step extension typo is explicitly corrected there. The definition extends the brief treatment in Hom Functor; this note records the ideal test and the closure results required by this batch.
