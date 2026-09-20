---
title: Path Connectedness and Path Components
aliases:
  - Path-Connected
  - Path Connected
  - Path-Connectedness
  - Path Connectedness
  - Path Components
  - Path-Connected Components
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - topology
  - path-connectedness
  - matrix-groups
created: 2026-09-20
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems M.6–M.8, printed pp. 75–76, PDF pp. 87–88; Brian C. Hall, Lie Groups, Lie Algebras, and Representations, 2nd ed., §1.3.2, Definition 1.9 and Propositions 1.10–1.13, printed pp. 17–18, PDF pp. 29–30; §3.8, Corollary 3.45 and following discussion, printed p. 70, PDF p. 82"
source_status: verified
status: not-started
---

# Path Connectedness and Path Components

To prove that a matrix group is path connected, one must construct paths that **remain in the group**. To determine its path components, one also needs an obstruction to paths between different pieces. These two tasks recur in the unitary, general linear, Lorentz, and symplectic group exercises.

## Definition

> [!info] Path and path connectedness
> A **path** in a topological space $X$ from $x$ to $y$ is a continuous map
> $$
> \gamma:[0,1]\longrightarrow X,
> \qquad \gamma(0)=x,\quad \gamma(1)=y.
> $$
> A nonempty space $X$ is **path connected** if every pair of its points can be joined by such a path. A subset is path connected when it is path connected in its subspace topology.

Only continuity is required: a path need not be injective, smooth, or a straight line. For matrix spaces, continuity means continuity of every matrix entry in the usual real or complex Euclidean topology.

This note requires a path-connected space to be nonempty, as in the path-connectedness comparison in [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]. Artin's pairwise definition in M.6 does not explicitly impose nonemptiness; if read literally, it also applies vacuously to the empty set. This difference has no effect on the nonempty examples below. The empty space has no path components.

## Intuition

Path connectedness gives a way to move continuously between two points while respecting all defining conditions. A proposed path in $GL_n(\mathbb R)$ must remain invertible, and one in $U_n$ must remain unitary.

For example, the segment $(1-t)I+t(-I)$ passes through the zero matrix, so it is not a path in $GL_n$. A formula with the correct endpoints is not sufficient.

## Path Components

Define $x\sim y$ when some path in $X$ joins $x$ to $y$.

1. **Reflexivity:** the constant path joins $x$ to itself.
2. **Symmetry:** if $\gamma$ joins $x$ to $y$, then $t\mapsto\gamma(1-t)$ joins $y$ to $x$.
3. **Transitivity:** if $\gamma$ joins $x$ to $y$ and $\eta$ joins $y$ to $z$, use

$$
(\gamma*\eta)(t)=
\begin{cases}
\gamma(2t),&0\le t\le \frac12,\\
\eta(2t-1),&\frac12\le t\le1.
\end{cases}
$$

The two formulas agree at $t=\frac12$. The pasting lemma on the two closed subintervals gives continuity, and both pieces remain in $X$.

Thus $\sim$ is an equivalence relation. Its classes are the **path components** of $X$. Each class is path connected: if two points can be joined to a fixed point, reversing one path and concatenating produces a path between them. Every point along that path remains in the same class, since the initial portion of the path joins it to an endpoint. A path-connected subset lies in one class, so these classes are precisely the maximal nonempty path-connected subsets.

This is the construction requested by Artin M.6 [S1, printed pp. 75–76, PDF pp. 87–88], with the details supplied independently here.

## Key Properties

### Continuous images and elementary constructions

- **Continuous images preserve path connectedness.** If $f:X\to Y$ is continuous and $\gamma$ joins $x$ to $x'$ in $X$, then $f\circ\gamma$ joins their images. Thus $f(X)$ is path connected whenever $X$ is.
- **Nonempty convex subsets of $\mathbb R^m$ are path connected.** The segment $\gamma(t)=(1-t)x+ty$ remains in the subset by convexity. More generally, for a star-shaped set, join each point to a common center and concatenate.
- **Finite products of path-connected spaces are path connected.** Choose a path in each factor and use the coordinatewise path.
- **A nonempty family of path-connected subsets with a common point has path-connected union.** Join the starting point to the common point inside one member and then to the endpoint inside another.
- **Homeomorphisms preserve path components.** Apply continuous-image preservation to the homeomorphism and its inverse.

These give useful construction methods, but the continuous-image statement concerns the image, not an arbitrary larger target space.

### Relation to connectedness

Every path-connected space is connected. If $X=U\amalg V$ were a separation into nonempty open sets, a path from $U$ to $V$ would pull it back to a separation of $[0,1]$. This contradicts connectedness of a real interval, an elementary real-analysis input.

Consequently, each path component lies in a connected component. The converse implication fails: a connected component can contain several path components.

> [!example] Path components need not be open or closed
> The topologist's sine curve is
> $$
> T=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1]).
> $$
> Its graph part and its vertical segment are each path connected, but no path in $T$ joins them. The linked [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components#Examples|connectedness note]] proves this obstruction using the intermediate value theorem and proves that $T$ is connected.
>
> Thus $T$ has two path components and only one connected component. The graph component is not closed because its closure is $T$; the vertical component is not open because every neighborhood of one of its points meets the graph. In particular, closure need not preserve path connectedness.

### When connected and path connected agree

A space is **locally path connected** if, for every point $x$ and open neighborhood $U$ of $x$, there is a path-connected open neighborhood $V$ with $x\in V\subseteq U$.

In a locally path-connected space, every path component is open: each point has a path-connected open neighborhood contained in its component. Its complement, a union of other path components, is also open, so each path component is clopen. A connected component cannot meet two such pieces. Since every path component is already connected, **connected components and path components coincide**.

In particular, a nonempty connected, locally path-connected space is path connected. Open subsets of Euclidean spaces are locally path connected, using sufficiently small balls. The same is true of topological manifolds by applying coordinate charts. For Lie groups, the manifold structure therefore justifies replacing connectedness by path connectedness. This inference must not be applied to an arbitrary topological space merely because it is connected.

**Hall's convention.** Hall defines “connected” by the existence of paths in Definition 1.9 [S10, §1.3.2, printed p. 17, PDF p. 29], explicitly warning that the usual general-topology definition differs. Corollary 3.45 and the discussion following it establish the manifold/local-path-connectedness setting for matrix Lie groups [S10, printed p. 70, PDF p. 82]. The elementary proof that local path connectedness makes the two kinds of components coincide is supplied above; Hall refers that general topological step to another text.

## Topological Groups and the Identity Path Component

Let $G$ be a topological group: multiplication and inversion are continuous. Write

$$
P_e=\{g\in G:\text{a path in }G\text{ joins }e\text{ to }g\}.
$$

The identity path component $P_e$ is a normal subgroup. If $\alpha,\beta$ are paths from $e$ to $a,b$, then

$$
t\longmapsto\alpha(t)\beta(t)^{-1}
$$

joins $e$ to $ab^{-1}$, proving the subgroup criterion. For fixed $g\in G$, the path $t\mapsto g\alpha(t)g^{-1}$ joins $e$ to $gag^{-1}$; applying this also to $g^{-1}$ proves normality.

Hall gives the corresponding matrix-group proof in Proposition 1.10 [S10, printed p. 17, PDF p. 29]. The argument above isolates the continuity properties needed to state it for general topological groups.

Moreover, the path component of $g$ is exactly $gP_e$. Left translation carries paths at $e$ to paths at $g$, and translation by $g^{-1}$ gives the converse. Thus it suffices to connect every group element to the identity when proving that a group is path connected.

> [!warning] Source terminology: the identity component
> Artin M.7 calls the set of matrices joinable to $I$ the “connected component” [S1, printed p. 76, PDF p. 88]. The construction proves that this set is the **identity path component**. General topology uses **identity connected component** for the maximal connected subset containing $e$. The two agree for locally path-connected groups, in particular Lie groups. This note uses $P_e$ to keep that distinction visible.

Two applications explain the group-theory exercises:

- For fixed $x\in G$, the conjugacy class is the image of the continuous map $g\mapsto gxg^{-1}$. It is path connected if $G$ is.
- If $H$ is a finite normal subgroup of a path-connected group and $H$ is discrete in its subspace topology, then each map $g\mapsto ghg^{-1}$ has connected image in the discrete space $H$, hence is constant. Its value at $e$ is $h$, so $H\subseteq Z(G)$. A finite subset of a Hausdorff space is discrete; the hypothesis therefore holds for matrix groups.

The discreteness condition in the second application matters; finiteness alone does not imply it in an arbitrary non-Hausdorff topological group.

## Methods for Matrix-Group Exercises

### Construct paths inside generators

For an elementary shear $E_{ij}(a)=I+a e_{ij}$ with $i\ne j$, the path

$$
t\longmapsto I+ta e_{ij}
$$

stays in $SL_n(\mathbb R)$ and joins $I$ to $E_{ij}(a)$. If a matrix is a finite product of such shears, multiply their paths pointwise to obtain a path from $I$ to that matrix. Using elementary generation of $SL_n(\mathbb R)$, this proves its path connectedness, as requested in Artin M.8(a). The generation theorem is the separate algebraic input; a path formula for generators alone does not prove that they generate the group.

### Use the spectral theorem

For $P\in U_n$, the spectral theorem gives

$$
P=V\operatorname{diag}(e^{i\theta_1},\ldots,e^{i\theta_n})V^*,
\qquad V\in U_n,\quad\theta_j\in\mathbb R.
$$

Then

$$
\gamma(t)=V\operatorname{diag}(e^{it\theta_1},\ldots,e^{it\theta_n})V^*
$$

is unitary for every $t$, with $\gamma(0)=I$ and $\gamma(1)=P$. Thus $U_n$ is path connected. The arguments $\theta_j$ are chosen for this fixed matrix; no continuous choice of arguments across all of $U_n$ is required or asserted.

This is the construction in Hall's Proposition 1.13 [S10, printed p. 18, PDF p. 30], and it solves the unitary-group exercise in this vault.

### Separate components with a discrete invariant

A continuous map from a path-connected space to a discrete space is constant, because its image is connected. Hence determinant sign is constant along paths in $GL_n(\mathbb R)$, and the pair of determinant sign and a suitable entry sign obstructs paths in $O_{1,1}$.

An invariant proves only that points with different values cannot be joined. To prove that its fibers are precisely the path components, **also construct paths within every nonempty fiber**. The real general linear group and Lorentz-group exercises carry out this second step.

## Examples

| Space | Path components | Reason |
|---|---|---|
| $\{(x,y):x^2+y^2=1\}\subset\mathbb R^2$ | One | Choose angles for the endpoints and interpolate the angles |
| $\{(x,y):xy=0\}$ | One | Join any point to the origin along its axis |
| $\{(x,y):xy=1\}$ | Two | On each branch use $x\mapsto(x,1/x)$; the sign of $x$ cannot change along a path |
| $U_n$, $n\ge1$ | One | The spectral-theorem path above |
| $GL_n(\mathbb R)$, $n\ge1$ | Two, distinguished by determinant sign | Artin M.8 and the argument below |

For the last row, let $A$ have positive determinant $d$. Right multiplication by

$$
\operatorname{diag}(1-t+t/d,1,\ldots,1)
$$

gives a path from $A$ to a determinant-one matrix, remaining in the positive-determinant subset throughout. The shear argument connects that endpoint to $I$. Multiplication by $J=\operatorname{diag}(-1,1,\ldots,1)$ is a homeomorphism between the positive- and negative-determinant subsets. Both are therefore path connected, and the determinant-sign obstruction shows there are exactly two components.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

- **Artin [S1]:** *Algebra*, second edition, Ch. 2, Miscellaneous Problems M.6–M.8, printed pp. 75–76 / PDF pp. 87–88. Both original PDF pages were rendered and visually checked. M.6 supplies the path definition, equivalence-relation exercise, and plane-locus examples; M.7 supplies the normal-subgroup construction; M.8 supplies the real linear-group applications. These are exercises, not printed solutions; the proofs here are independent derivations.
- **Hall [S10]:** *Lie Groups, Lie Algebras, and Representations*, second edition, §1.3.2, Definition 1.9 and Propositions 1.10–1.13, printed pp. 17–18 / PDF pp. 29–30; §3.8, Corollary 3.45 and following discussion, printed p. 70 / PDF p. 82. These original pages were rendered and visually checked. Hall supplies the explicit terminology comparison and printed proofs for the normal identity path component and the unitary-group path construction. His manifold result explains why the two notions coincide for matrix Lie groups; the general local-path-connectedness argument above is independently expanded.
- **Proof scope:** The elementary path constructions, component properties, local path-connectedness criterion, and displayed matrix paths are proved here. Interval connectedness, the pasting lemma, the unitary spectral theorem, elementary generation of $SL_n(\mathbb R)$, and the manifold structure of Lie groups are named inputs. The sine-curve obstruction is proved in the linked connectedness note.
- **Topology boundary:** Matrix groups here carry their usual Euclidean topology. Path connectedness of their real or complex points is distinct from irreducibility or connectedness of an associated spectrum in the Zariski topology.
