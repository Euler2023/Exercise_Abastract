---
title: Zariski Topology
aliases:
  - Zariski topology on Spec
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
  - topology
created: 2026-08-23
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, §5, printed pp. 406–409, PDF pp. 421–424, and Exercises 14–16, printed pp. 411–412, PDF pp. 426–427; Jürgen Neukirch, Algebraic Number Theory, Ch. I, §13, printed pp. 85–86, PDF pp. 104–105"
source_status: partially-verified
status: not-started
---

# Zariski Topology

## Definition

> [!info] Definition
> Let $A$ be a commutative ring. For an ideal $\mathfrak{a}\subseteq A$, put
> $$
> V(\mathfrak a)=\{\mathfrak p\in\operatorname{Spec}(A):\mathfrak a\subseteq\mathfrak p\}.
> $$
> The **Zariski topology** on $\operatorname{Spec}(A)$ is the topology whose closed subsets are the sets $V(\mathfrak a)$.

For affine space $\mathbb A_k^n$, the analogous closed sets are common zero loci of families of polynomials in $k[x_1,\ldots,x_n]$. The spectrum formulation works over an arbitrary commutative ring and retains non-maximal prime ideals as points.

## Intuition

The topology records algebraic equations rather than metric closeness. It is usually coarse and non-Hausdorff: a generic point can have an entire irreducible closed subset as its closure.

The order is reversed:

$$
\mathfrak a\subseteq\mathfrak b\quad\Longrightarrow\quad V(\mathfrak b)\subseteq V(\mathfrak a).
$$

## Key Properties

For ideals $\mathfrak a,\mathfrak b$ and a family $(\mathfrak a_i)_{i\in I}$,

$$
V(\mathfrak a\mathfrak b)=V(\mathfrak a)\cup V(\mathfrak b),
\qquad
V\!\left(\sum_{i\in I}\mathfrak a_i\right)=\bigcap_{i\in I}V(\mathfrak a_i).
$$

Consequently, finite unions and arbitrary intersections of closed sets are closed. Moreover,

$$
V(\mathfrak a)=V(\sqrt{\mathfrak a}),
$$

so the topology remembers the radical of an ideal, not nilpotent multiplicity data.

For $f\in A$, the **distinguished open set** is

$$
D(f)=\operatorname{Spec}(A)\setminus V((f))
=\{\mathfrak p:f\notin\mathfrak p\}.
$$

These sets form a basis for the topology.

## Closures and Generic Points

For $\mathfrak p\in\operatorname{Spec}(A)$,

$$
\overline{\{\mathfrak p\}}=V(\mathfrak p).
$$

Thus $\mathfrak p$ is closed exactly when it is maximal. A point $\eta$ is a **generic point** of a closed subset $Z$ if $\overline{\{\eta\}}=Z$.

> [!example] $\operatorname{Spec}(\mathbb Z)$
> The closed points are $(p)$ for prime numbers $p$. The point $(0)$ is generic because
> $$
> \overline{\{(0)\}}=V((0))=\operatorname{Spec}(\mathbb Z).
> $$
> Every nonempty open subset is obtained by removing finitely many closed prime points.

## Functoriality

A ring homomorphism $\varphi:A\to B$ induces a continuous map in the opposite direction,

$$
\operatorname{Spec}(B)\longrightarrow\operatorname{Spec}(A),
\qquad
\mathfrak q\longmapsto\varphi^{-1}(\mathfrak q).
$$

Hence $\operatorname{Spec}$ is a contravariant functor from commutative rings to topological spaces.

## Irreducibility

A nonempty closed subset is **irreducible** if it is not the union of two proper closed subsets. On $\operatorname{Spec}(A)$, the irreducible closed subsets are precisely the sets $V(\mathfrak p)$ for prime ideals $\mathfrak p$.

If $A$ is Noetherian, every closed subset is a finite union of irreducible closed subsets; after removing redundant inclusions, the irreducible components are unique.

The detailed proofs, nonempty-space convention, and minimal-prime description of components are developed in [[08 - Arithmetic Geometry/Concepts/Irreducible Topological Spaces and Components|Irreducible Topological Spaces and Components]].

## Quasi-Compactness and Connectedness

For any commutative ring $A$ with identity, $\operatorname{Spec}(A)$ is quasi-compact: every open cover has a finite subcover. Lang calls this property "compact" in Exercise IX.15; it does not imply Hausdorffness. The proof turns a covering into an ideal sum containing $1$, then extracts a finite sum. See [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]] for the terminology comparison and the proof.

Connectedness asks instead whether the spectrum has a nonempty proper subset that is both open and closed. By Lang's Exercise IX.14, this happens exactly when $A$ has a nontrivial idempotent, equivalently when it is a product of two nonzero rings. See [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]] for the proof and the empty-spectrum convention.

Irreducibility implies connectedness, but the converse fails: $\operatorname{Spec}(k[x,y]/(xy))$ has two intersecting irreducible components and one connected component.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]
- [[08 - Arithmetic Geometry/Concepts/Irreducible Topological Spaces and Components|Irreducible Topological Spaces and Components]]
- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Morphisms of Schemes|Morphisms of Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Exercises

```dataview
TABLE status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Lang defines $\operatorname{Spec}(A)$, the closed sets $V(\mathfrak a)$, the topology axioms, non-Hausdorff behavior, contravariant functoriality, Noetherian decomposition into irreducible closed sets, and the characterization $V(\mathfrak p)$ of irreducible closed subsets on the cited pages. Neukirch independently defines the Zariski topology on $\operatorname{Spec}(\mathfrak o)$ and verifies the closed-point/generic-point picture for $\operatorname{Spec}(\mathbb Z)$. The distinguished-open basis and the displayed closure formula are standard deductions supplied in this note; they were not separately proved in the bounded slices, so the note is `partially-verified` rather than fully verified.

The additional compactness and connectedness summary follows Lang, Ch. IX, Exercises 14–16, printed pp. 411–412 / PDF pp. 426–427; those original pages were visually checked for the linked concept notes. The expanded proofs are independent solutions, and the irreducibility/connectedness counterexample is derived in those notes.
