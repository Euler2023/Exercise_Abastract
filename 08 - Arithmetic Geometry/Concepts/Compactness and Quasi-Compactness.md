---
title: Compactness and Quasi-Compactness
aliases:
  - Compactness
  - Quasi-Compactness
  - Compact Spaces
  - Quasi-Compact Spaces
  - Quasicompactness
  - 紧致性
  - 拟紧性
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - topology
  - arithmetic-geometry
  - compactness
created: 2026-09-20
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises 15–16, printed p. 412, PDF p. 427; Ch. VI, §1, remark after Corollary 1.9, printed p. 264, PDF p. 279; Stacks Project, §§5.12 and 10.17"
source_status: partially-verified
status: not-started
---

# Compactness and Quasi-Compactness

## Definition and Terminology

> [!info] Quasi-compactness
> A topological space $X$ is **quasi-compact** if every open cover $X=\bigcup_{i\in I}U_i$ contains a finite subcover:
> $$
> X=U_{i_1}\cup\cdots\cup U_{i_n}.
> $$
> The empty space is quasi-compact; its empty subfamily is already a cover.

A space is **Hausdorff** if any two distinct points have disjoint open neighborhoods. In this note, **compact** means **quasi-compact and Hausdorff**. A subset has either property when it has that property in its subspace topology.

This is a terminology choice, not an additional theorem:

| Source or setting | Meaning of “compact” |
|---|---|
| Lang, *Algebra*, Ch. IX, Exercise 15, printed p. 412 / PDF p. 427 | The finite-subcover property, with no Hausdorff hypothesis |
| Stacks Project, [§5.12](https://stacks.math.columbia.edu/tag/0059), and this note | Quasi-compact plus Hausdorff |
| A subspace of a Euclidean space | Hausdorff is automatic, so the two conventions agree |

Thus Lang's assertion that $\operatorname{Spec}(A)$ is compact becomes “$\operatorname{Spec}(A)$ is quasi-compact” in our convention. **Quasi-compact does not mean non-Hausdorff**: every compact space is also quasi-compact.

## Intuition

Quasi-compactness converts an arbitrary collection of local covering data into finitely many sufficient pieces. It is not a claim that the space has finitely many points.

For a ring spectrum, the finite certificate is algebraic: membership of $1$ in a sum of ideals is witnessed by a **finite** sum. This is exactly the mechanism of Lang's hint for [[02 - Ring Theory/Exercises/Exercise R276 - Quasi-Compactness of the Zariski Topology|Exercise R276]].

## Closed Sets and the Finite Intersection Property

A family $(F_i)_{i\in I}$ of closed subsets has the **finite intersection property** if every finite subfamily has nonempty intersection. The intersection of the empty subfamily means $X$.

> [!abstract] Equivalent criterion
> A space $X$ is quasi-compact if and only if every family of closed subsets with the finite intersection property has nonempty total intersection.

**Proof.** If $\bigcap_iF_i=\varnothing$, their open complements cover $X$. A finite subcover exists precisely when some finite intersection of the $F_i$ is empty. Applying this observation in both directions proves the equivalence.

This complement argument explains why Lang asks us to use closed sets rather than to start with individual open neighborhoods.

## Basic Properties

The following proofs are included to make the hypotheses explicit. No separation axiom is needed for the first three.

1. **Closed subsets of quasi-compact spaces are quasi-compact.** If $F\subseteq X$ is closed and $F=\bigcup_i(F\cap U_i)$ with the $U_i$ open in $X$, append $X\setminus F$ to obtain a cover of $X$. A finite subcover restricts to one of $F$.
2. **Continuous images of quasi-compact spaces are quasi-compact.** Pull an open cover of $f(X)$ back to $X$, select finitely many inverse images, and then use the corresponding members of the original cover.
3. **A finite union of quasi-compact subsets is quasi-compact.** Restrict a given open cover to each subset, take a finite subcover there, and combine the finitely many selections.
4. **A quasi-compact subset of a Hausdorff space is closed.** Let $K\subseteq Y$ be quasi-compact and $y\notin K$. For each $x\in K$, choose disjoint open neighborhoods $U_x$ of $x$ and $V_x$ of $y$. Finitely many $U_{x_j}$ cover $K$. Then $\bigcap_jV_{x_j}$ is a neighborhood of $y$ disjoint from $K$. Thus $Y\setminus K$ is open.

In particular, a continuous map from a compact space into a Hausdorff space has compact, closed image. Without a Hausdorff target the image is still quasi-compact, but need not be Hausdorff or closed.

**Open subsets need not be quasi-compact.** The interval $(0,1)$ has the open cover $\{(1/n,1):n\geq2\}$ with no finite subcover. It is an open subset of the compact space $[0,1]$. Here compactness of the closed interval is an input from real analysis, namely the Heine–Borel theorem; that theorem is not the definition of quasi-compactness in an arbitrary topology.

## Lang's Spectrum Argument

Let $A$ be a commutative ring with identity. For an ideal $I$, write

$$
V(I)=\{\mathfrak p\in\operatorname{Spec}(A):I\subseteq\mathfrak p\}.
$$

Suppose $\operatorname{Spec}(A)=\bigcup_{\lambda\in\Lambda}U_\lambda$, where $U_\lambda=\operatorname{Spec}(A)\setminus V(I_\lambda)$. Taking complements gives

$$
\varnothing=\bigcap_{\lambda\in\Lambda}V(I_\lambda)
=V\!\left(\sum_{\lambda\in\Lambda}I_\lambda\right).
$$

Every proper ideal is contained in a maximal ideal, hence in a prime ideal. Therefore $V(J)=\varnothing$ implies $J=A$, so

$$
1\in\sum_{\lambda\in\Lambda}I_\lambda.
$$

An ideal sum consists of finite sums of elements from its summands. Thus there is a finite set $F\subseteq\Lambda$ and elements $a_\lambda\in I_\lambda$ such that

$$
1=\sum_{\lambda\in F}a_\lambda.
$$

It follows that $\sum_{\lambda\in F}I_\lambda=A$, hence $\bigcap_{\lambda\in F}V(I_\lambda)=\varnothing$ and $\bigcup_{\lambda\in F}U_\lambda=\operatorname{Spec}(A)$. If $A$ is the zero ring, its spectrum is empty and the conclusion holds immediately.

> [!important] Scope of the proof
> This proves quasi-compactness for **every commutative ring with identity**, without a Noetherian or finite-generation assumption. The existence of maximal ideals over proper ideals is the imported algebraic result, usually proved with Zorn's lemma. The argument above is an independent elaboration of Lang's Exercise 15 and its printed hint, not a full proof printed in that exercise.

### Distinguished Open Sets

Lang's next exercise studies $A_f=A[1/f]$. Localization induces a homeomorphism

$$
\operatorname{Spec}(A_f)\xrightarrow{\sim}D(f)
=\{\mathfrak p\in\operatorname{Spec}(A):f\notin\mathfrak p\}.
$$

See [[02 - Ring Theory/Exercises/Exercise R277 - Principal Open Affines as a Topological Basis for Spec|Exercise R277]] for the localization and topology argument. Applying the preceding theorem to $A_f$ shows that every $D(f)$ is quasi-compact. Since these opens form a basis, an open subset of $\operatorname{Spec}(A)$ is quasi-compact **if and only if it is a finite union of distinguished opens**: one direction selects a finite subcover from the basis cover, and the other uses the finite-union property.

This does not make every open subset quasi-compact. For example, let $A=k[x_1,x_2,\ldots]$ for a field $k$, and put

$$
U=\bigcup_{i\geq1}D(x_i)\subseteq\operatorname{Spec}(A).
$$

Given finitely many indices $J$, the ideal $\mathfrak p_J=(x_j:j\in J)$ is prime because its quotient is a polynomial ring over $k$ in the remaining variables, hence a domain. It contains every selected $x_j$, but does not contain $x_\ell$ for $\ell\notin J$. Thus $\mathfrak p_J$ belongs to $U$ but to none of the selected $D(x_j)$. The displayed cover has no finite subcover.

## Examples and Comparison with Connectedness

| Space | Quasi-compact? | Hausdorff? | Connected? |
|---|---|---|---|
| $\operatorname{Spec}(\mathbb Z)$ | Yes | No | Yes |
| $\operatorname{Spec}(k\times k)$, $k$ a field | Yes | Yes | No |
| $[0,1]$ with its usual topology | Yes | Yes | Yes |
| $\mathbb R$ with its usual topology | No | Yes | Yes |

For $\operatorname{Spec}(\mathbb Z)$, the generic point $(0)$ lies in every nonempty open: a nonempty basic open $D(n)$ has $n\neq0$ and therefore contains $(0)$. Thus distinct points cannot have disjoint neighborhoods. The same observation shows irreducibility and hence connectedness; see [[08 - Arithmetic Geometry/Concepts/Irreducible Topological Spaces and Components|Irreducibility]].

The spectrum of $k\times k$ has two points, each open and closed, so it is a finite discrete space. For the real-line examples, interval connectedness and Heine–Borel are standard real-analysis inputs; the cover $\{(-n,n):n\geq1\}$ directly shows that $\mathbb R$ is not quasi-compact.

### A Second Algebraic Setting: Krull Topology

Let $K/k$ be an algebraic Galois extension. Lang states that $\operatorname{Gal}(K/k)$ with its Krull topology is compact and totally disconnected in the remark after Corollary VI.1.9 [S2, printed p. 264, PDF p. 279]. This offers a useful contrast with the generally non-Hausdorff topology on a ring spectrum.

The inverse-limit description realizes this group as a closed subspace of the product of the finite discrete groups $\operatorname{Gal}(F/k)$, where $F$ ranges over the finite Galois intermediate extensions in $K/k$. Such a product is Hausdorff and compact by Tychonoff's theorem; compatibility of coordinates defines a closed subset. Distinct compatible tuples differ in a finite coordinate, whose fibers are open and closed, so no connected subset contains two distinct tuples. Thus compactness and total disconnectedness coexist.

This explanation uses two named inputs: the inverse-limit description of the Galois group and Tychonoff's theorem. Their proofs are not part of this note. See [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]] for the algebraic construction. Lang's cited remark states the result and points to exercises; it does not contain this proof.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]
- [[08 - Arithmetic Geometry/Concepts/Irreducible Topological Spaces and Components|Irreducible Topological Spaces and Components]]
- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- **[S2] Lang, *Algebra*, revised third edition:** Ch. IX, Exercises 15–16, printed p. 412, PDF p. 427, supplies the finite-subcover formulation, the ideal-sum hint, and the distinguished-open localization exercise. Ch. VI, §1, remark after Corollary 1.9, printed p. 264, PDF p. 279, states compactness and total disconnectedness in Krull topology. Both original PDF pages were rendered and visually checked. These are substantive sources for the arguments and examples, not merely further-reading references.
- **Stacks Project:** [§5.12, Tag 0059](https://stacks.math.columbia.edu/tag/0059), supplies the terminology comparison and general topological reference; [§10.17, Tag 00DY](https://stacks.math.columbia.edu/tag/00DY), supplies the parallel spectrum framework. These references complement Lang's exercise route.
- **Independent derivations:** the complement criterion, elementary preservation arguments, expanded spectrum proof, distinguished-open consequences, and the infinite-variable counterexample are supplied in this note.
- **Imported inputs:** existence of maximal ideals over proper ideals; localization's spectrum homeomorphism as proved in R277; real interval connectedness and Heine–Borel; the Galois inverse-limit theorem and Tychonoff. The latter analytic and inverse-limit inputs are not proved here. The mixed source and proof scope is recorded as `partially-verified`.
