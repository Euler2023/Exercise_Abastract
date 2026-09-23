---
title: Module Support and Fibers
aliases:
  - Support of a Module
  - Module Fibers
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - localization
created: 2026-09-22
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercises 11-12 and 15-17, printed pp. 444-446, PDF pp. 459-461"
source_status: verified
---

# Module Support and Fibers

## Definition

> [!info] Support and fiber
> Let $A$ be a commutative unital ring and $M$ an $A$-module. Its **support** is
> $$
> \operatorname{Supp}_A(M)=\{\mathfrak p\in\operatorname{Spec}A:M_{\mathfrak p}\ne0\}.
> $$
> At a prime $\mathfrak p$, define the residue field and **fiber** by
> $$
> \kappa(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p},
> \qquad M(\mathfrak p)=M_{\mathfrak p}/\mathfrak pM_{\mathfrak p}.
> $$
> The fiber is a vector space over $\kappa(\mathfrak p)$. For an ideal $I$, write $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$; Lang writes $\mathcal Z(I)$.

## Intuition

Localization tests whether a module survives near a prime. Passing further to the residue field gives linear algebra at that prime. These are different operations: without finite generation, a nonzero localized module need not have a nonzero fiber.

## Key Properties

1. For every module, $\operatorname{Supp}(M)\subseteq V(\operatorname{ann}M)$. For a finitely generated module, equality holds, by clearing a finite set of denominators in [[04 - Linear Algebra and Modules/Exercises/Exercise LA385 - Support of a Finite Module and Its Annihilator|Lang X.11]].
2. If $M$ is finitely generated, then $M_{\mathfrak p}=0$ if and only if $M(\mathfrak p)=0$. The nontrivial direction is Nakayama's lemma for the finite $A_{\mathfrak p}$-module $M_{\mathfrak p}$.
3. If $0\to L\to M\to N\to0$ is exact, then $\operatorname{Supp}(M)=\operatorname{Supp}(L)\cup\operatorname{Supp}(N)$. Localize the sequence: its middle term is zero exactly when both outer terms are zero.
4. If $M$ and $I$ are finitely generated and $\operatorname{Supp}(M)\subseteq V(I)$, then $I^nM=0$ for some $n\ge1$. The proof uses $I\subseteq\sqrt{\operatorname{ann}M}$ and a bound on monomials in generators of $I$; see [[04 - Linear Algebra and Modules/Exercises/Exercise LA386 - Support Containment and Annihilation by an Ideal Power|Lang X.12]].
5. If $M$ is finite over a reduced Noetherian local ring and $\dim_{\kappa(\mathfrak p)}M(\mathfrak p)$ is constant on its spectrum, then $M$ is free. This is the exercise theorem proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA388 - Constant Fibre Dimension over a Reduced Local Ring|Lang X.15]], not part of the definition of support.

## Examples

> [!example] A cyclic module
> For $M=A/I$, its annihilator is $I$ and its support is $V(I)$. Its fiber has dimension $1$ at every prime containing $I$, and dimension $0$ elsewhere: an element of $I\setminus\mathfrak p$ becomes a unit.

> [!example] Same support, different annihilation
> Over $k[x]$, the modules $A/(x)$ and $A/(x^2)$ have the same support $V(x)$. Multiplication by $x$ is zero on the first and nonzero on the second. Support forgets nilpotent thickness.

> [!example] Finite generation matters
> The $\mathbb Z$-module $\mathbb Q$ has support all of $\operatorname{Spec}\mathbb Z$: each localization is $\mathbb Q$. Its fiber at $(\ell)$ is zero for every prime integer $\ell$, because $\ell\mathbb Q=\mathbb Q$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules and Nakayama's Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Definitions and exercise assertions checked on original rendered pages [S2, Ch. X, Exercises 11-12, printed p. 444, PDF p. 459; Exercises 15-17, printed pp. 444-446, PDF pp. 459-461].
- The exercise solutions and examples are independent derivations. Exactness of localization is the established input in [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]. The fiber criterion uses Nakayama [S2, Ch. X, Lemmas 4.1-4.3, printed pp. 424-425, PDF pp. 439-440].
- “Verified” records source checking and explicit proof provenance. The textbook sets these exercise assertions rather than supplying their complete solutions.
