---
title: Irreducible Topological Spaces and Components
aliases:
  - Irreducible Spaces
  - Irreducible Components
  - Topological Irreducibility
  - 不可约空间
  - 不可约性
  - 不可约分支
  - 泛点
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
  - topology
created: 2026-09-20
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, §5, Propositions 5.1 and 5.4, Theorem 5.3, printed pp. 406–409, PDF pp. 421–424; Jürgen Neukirch, Algebraic Number Theory, Ch. I, §13, printed pp. 85–86, PDF pp. 104–105; The Stacks Project, Sections 5.8, 5.9 and 10.26"
source_status: verified
status: not-started
---

# Irreducible Topological Spaces and Components

An algebraic space can be connected even though it consists of several intersecting closed pieces. **Irreducibility** distinguishes a single piece from such a union. This gives a different decomposition from [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|connected components]], which separate a space into disjoint connected subsets.

## Definition

> [!info] Irreducible space and subset
> A topological space $X$ is **irreducible** if $X\ne\varnothing$ and every expression
> $$
> X=F_1\cup F_2
> $$
> with $F_1,F_2$ closed in $X$ has $F_1=X$ or $F_2=X$.
>
> A subset $Y\subseteq X$ is irreducible when it is irreducible with its subspace topology. The subset itself need not be closed in $X$.

Lang introduces irreducible **closed** subsets of a spectrum before Theorem 5.3 [S2, Ch. IX, §5, printed p. 409, PDF p. 424]. The definition above applies the same condition to arbitrary topological spaces and explicitly includes nonemptiness, as in [Stacks, Definition 5.8.1](https://stacks.math.columbia.edu/tag/004V).

> [!warning] The empty-set convention matters
> Lang's sentence on printed p. 409 does not explicitly exclude the empty set. This note excludes it, consistently with the prime-ideal characterization in Proposition 5.4: $V(A)=\varnothing$, whereas prime ideals are proper. An empty closed set has a decomposition into **zero** irreducible components. Connectedness in this group of notes follows Lang's separation convention and does allow the empty space.

## Intuition

Irreducibility says that imposing two alternative closed conditions cannot cover the space unless one condition already holds everywhere. Its open-set formulation is especially useful: **two nonempty open parts of an irreducible space must meet**. Thus a nonempty open part cannot be isolated from another nonempty open part.

In a spectrum, a closed piece is specified by equations, and an irreducible closed piece is specified by a prime ideal. This is the geometric meaning of the implication $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$.

## Key Properties

### Equivalent open-set criteria

For a nonempty space $X$, the following are equivalent:

1. $X$ is irreducible.
2. Any two nonempty open subsets of $X$ intersect.
3. Every nonempty open subset of $X$ is dense in $X$.

**Proof.** If disjoint nonempty opens $U,V$ exist, then

$$
X=(X\setminus U)\cup(X\setminus V)
$$

is a union of two proper closed sets. Conversely, taking complements of a decomposition into two proper closed sets produces such $U,V$. This proves $1\iff2$.

If $U$ is nonempty and $\overline U\ne X$, then $X\setminus\overline U$ is a nonempty open disjoint from $U$, contradicting 2. Conversely, a dense subset intersects every nonempty open subset, so 3 implies 2. $\square$

It follows by induction that finitely many nonempty open subsets have nonempty intersection. A nonempty open subset of an irreducible space is itself irreducible: any two of its nonempty relative opens are nonempty opens of the original space.

### Connection with connectedness

Every irreducible space is connected. A separation into two disjoint nonempty opens would violate criterion 2. The converse fails for intersecting lines, as shown below.

A Hausdorff irreducible space has exactly one point. Indeed, two distinct points would have disjoint nonempty open neighborhoods. Irreducibility of spaces with many points is therefore particularly relevant to non-Hausdorff topologies such as the Zariski topology.

### Continuous images and closures

If $f:X\to Y$ is continuous and $X$ is irreducible, then **$f(X)$ with its subspace topology** is irreducible. For two nonempty relative opens in $f(X)$, their inverse images are nonempty opens in $X$, hence intersect. This does not assert that all of $Y$ is irreducible unless $f$ is surjective or has dense image.

If $T\subseteq Y$ is irreducible, its closure is irreducible. Two nonempty relative opens of $\overline T$ both meet the dense subset $T$; their intersections with $T$ meet by irreducibility. In particular, $\overline{f(X)}$ is irreducible. These are the statements of [Stacks, Lemmas 5.8.2–5.8.3](https://stacks.math.columbia.edu/tag/004U), with the open-set proofs supplied here.

## Irreducible Components

> [!info] Definition
> An **irreducible component** of $X$ is an irreducible subset maximal under inclusion.

Every irreducible component is closed, because the closure of an irreducible subset is irreducible. Every irreducible subset lies in a component, and the components cover $X$.

For the existence assertion, use Zorn's lemma on the irreducible subsets containing a fixed irreducible subset $T$. The union of a chain is irreducible: two nonempty relative opens in that union meet two members of the chain; one member contains both chosen points, and irreducibility in that member gives an intersection. Thus a maximal member exists. Taking $T$ to be a singleton gives the covering assertion. This argument works without any Noetherian assumption; compare [Stacks, Lemma 5.8.3](https://stacks.math.columbia.edu/tag/004W).

Components need not be disjoint. They need not be open, and there may be infinitely many of them.

### The Noetherian finite decomposition

A space is **Noetherian** if every descending chain of closed subsets stabilizes. In such a space, every closed subset $C$ has a finite decomposition

$$
C=C_1\cup\cdots\cup C_r
$$

into its irreducible components. These components are uniquely determined, up to order. For $C=\varnothing$, take $r=0$.

**Proof.** Suppose some closed subset has no finite decomposition into irreducible closed subsets. The descending chain condition gives an inclusion-minimal such $C$. It is nonempty and reducible, so $C=F\cup G$ for proper closed subsets $F,G$ of $C$, also closed in the whole space. Minimality gives finite decompositions of both, hence of $C$, a contradiction.

From a finite decomposition remove any member contained in another. If an irreducible subset $T\subseteq C$ is covered by these finitely many closed pieces, irreducibility, applied repeatedly, gives $T\subseteq C_i$ for some $i$. Consequently, the remaining $C_i$ are precisely the maximal irreducible subsets of $C$. Their maximality also proves uniqueness. $\square$

This is Lang's minimal-counterexample argument for spectra of Noetherian rings [S2, Ch. IX, Theorem 5.3, printed p. 409, PDF p. 424], stated here for Noetherian spaces. The proof uses only the descending chain condition; the topological formulation is also recorded in [Stacks, Lemma 5.9.2](https://stacks.math.columbia.edu/tag/0052).

If $A$ is Noetherian, then $\operatorname{Spec}(A)$ is Noetherian: a descending chain of closed subsets corresponds to an ascending chain of their radical ideals, which stabilizes. Lang states this translation on printed p. 408 / PDF p. 423. **Finiteness of components is the additional conclusion here; existence and closedness hold in every space.**

## Irreducibility of a Spectrum

Let $A$ be a commutative ring with identity. In the [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski topology]], write

$$
V(I)=\{\mathfrak p\in\operatorname{Spec}(A):I\subseteq\mathfrak p\},
\qquad
\sqrt I=\{a\in A:a^n\in I\text{ for some }n\ge1\}.
$$

We use the radical correspondence

$$
\sqrt I=\bigcap_{\mathfrak p\supseteq I}\mathfrak p,
\qquad
V(I)\subseteq V(J)\iff\sqrt J\subseteq\sqrt I.
$$

Here the intersection of an empty family is $A$. The inclusion from left to right in the first equality follows from primality. For the reverse inclusion, if $a\notin\sqrt I$, localizing $A/I$ at the powers of $\bar a$ gives a nonzero ring. A maximal ideal of this localization contracts to a prime of $A$ containing $I$ and avoiding $a$. This proves the equality; the order-reversing criterion follows. The inputs are existence of maximal ideals and the prime-ideal correspondence for localization. Lang states the order-reversing criterion as Proposition 5.1(iii), leaving its proof as an exercise [S2, printed p. 406, PDF p. 421].

### The prime-ideal criterion

> [!abstract] Irreducible closed subsets
> For any ideal $I\subseteq A$,
> $$
> V(I)\text{ is irreducible}
> \iff \sqrt I\text{ is a prime ideal of }A.
> $$
> In particular,
> $$
> \operatorname{Spec}(A)\text{ is irreducible}
> \iff\sqrt{(0)}\text{ is prime}
> \iff A/\sqrt{(0)}\text{ is an integral domain}.
> $$

**Proof.** If $C=V(I)$ is irreducible, then $C\ne\varnothing$, so $\sqrt I\ne A$. If $ab\in\sqrt I$, every prime in $C$ contains $a$ or $b$, giving

$$
C=(C\cap V((a)))\cup(C\cap V((b))).
$$

One of the two closed subsets must equal $C$. By the radical correspondence, $a\in\sqrt I$ or $b\in\sqrt I$. Thus $\sqrt I$ is prime.

Conversely, if $\sqrt I=\mathfrak p$ is prime, then $V(I)=V(\mathfrak p)$. Its point $\mathfrak p$ has closure $V(\mathfrak p)$: every closed $V(J)$ containing that point has $J\subseteq\mathfrak p$, hence contains $V(\mathfrak p)$. A singleton is irreducible, and so is its closure. $\square$

Lang states this correspondence as Proposition 5.4 and assigns its proof as an exercise [S2, Ch. IX, §5, printed p. 409, PDF p. 424]. The proof above supplies the omitted argument. No Noetherian hypothesis is needed; [Stacks, Lemma 10.26.1](https://stacks.math.columbia.edu/tag/00ES) states the arbitrary-ring form as well.

### Minimal primes and generic points

Since inclusion of radical ideals reverses inclusion of their closed sets, the irreducible components of $\operatorname{Spec}(A)$ are exactly

$$
V(\mathfrak p),\qquad \mathfrak p\text{ a minimal prime of }A.
$$

More generally, the components of $V(I)$ correspond to primes minimal among those containing $I$. When $A$ is Noetherian, there are only finitely many such components by the theorem above.

A **generic point** of a closed subset $Z$ is a point $\eta$ satisfying $\overline{\{\eta\}}=Z$. On a spectrum,

$$
\overline{\{\mathfrak p\}}=V(\mathfrak p),
$$

so every irreducible closed subset has a unique generic point. Uniqueness follows because $V(\mathfrak p)=V(\mathfrak q)$ implies $\mathfrak p=\mathfrak q$ by the radical correspondence. Existence of generic points is a property of spectra; an arbitrary irreducible space need not have one. For example, an infinite set with the cofinite topology is irreducible, but each singleton is closed.

Neukirch explains the generic point $(0)$ of $\operatorname{Spec}(\mathbb C[x])$ through its residue field $\mathbb C(x)$: evaluation there retains the indeterminate rather than specializing it to a complex number. He also describes $(0)$ as the generic point of $\operatorname{Spec}(\mathbb Z)$ [S4, Ch. I, §13, printed p. 86, PDF p. 105]. Thus a generic point is an actual prime ideal in the space, not an extra ordinary closed point.

Lang's **generic point in a field** is expressed as an injective homomorphism from a finitely generated domain $B$ into a field $K$ [S2, printed p. 408, PDF p. 423]. The induced map $\operatorname{Spec}(K)\to\operatorname{Spec}(B)$ sends its unique point to the kernel $(0)$, the topological generic point. The homomorphism includes more data than the underlying point alone.

## Examples

> [!example] Intersecting lines: connected but reducible
> For a field $k$, let $A=k[x,y]/(xy)$, with residue classes again denoted $x,y$. Every prime contains $x$ or $y$, so
> $$
> \operatorname{Spec}(A)=V((x))\cup V((y)).
> $$
> Both subsets are proper and irreducible: the quotient rings are $k[y]$ and $k[x]$, respectively. Their intersection is the point $(x,y)$, so their union is connected. Indeed, any separation of the union would force each connected line to lie on one side, while their common point forces the same side. There are two irreducible components but one connected component.

> [!example] Nilpotents do not prevent irreducibility
> Let $A=k[\varepsilon]/(\varepsilon^2)$ for a field $k$. Every prime contains $\varepsilon$, and $A/(\varepsilon)\cong k$, so the only prime is $(\varepsilon)$.
>
> The spectrum is a singleton and hence irreducible, although $A$ is not an integral domain. Its nilradical $(\varepsilon)$ is prime. The correct criterion is that $A/\sqrt{(0)}$ is a domain. For a reduced ring, this criterion becomes “$A$ is a domain.”

> [!example] Irreducibility can fail after extending the ground field
> As an $\mathbb R$-algebra, $A=\mathbb R[t]/(t^2+1)$ is a field, so $\operatorname{Spec}(A)$ is irreducible. After extending scalars to $\mathbb C$,
> $$
> A\otimes_{\mathbb R}\mathbb C
> \cong \mathbb C[t]/((t-i)(t+i))
> \cong \mathbb C\times\mathbb C.
> $$
> The last isomorphism follows from the Chinese remainder theorem. Its spectrum has two points, each open and closed, so it is reducible. Consequently, ordinary irreducibility does not imply **geometric irreducibility**, which requires irreducibility after every field extension. This example is an independent application of the spectrum criterion.

## Connection with Irreducible Polynomials

Let $k$ be a field and let $f\in k[x_1,\ldots,x_n]$ be a nonconstant irreducible polynomial. The polynomial ring is a [[02 - Ring Theory/Concepts/Unique Factorization Domains|unique factorization domain]], so $f$ is prime and $(f)$ is a prime ideal. Hence $k[x_1,\ldots,x_n]/(f)$ is a domain and its spectrum is irreducible. This connects polynomial-factorization arguments, such as those in the linked conic and plane-curve exercises, to the topological notion.

For the classical zero set $V(f)\subseteq k^n$, assume additionally that $k$ is algebraically closed. The [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]] identifies its vanishing ideal with $\sqrt{(f)}=(f)$; the same prime-ideal criterion then proves that this zero set is irreducible in its Zariski topology. This use of the Nullstellensatz is an additional algebraic input. Over a general field, the set of $k$-rational zeros need not have the same topology or points as the spectrum.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness and Connected Components]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- **Book source: Lang [S2].** *Algebra*, revised third edition, Ch. IX, §5, printed pp. 406–409 / PDF pp. 421–424, checked against rendered pages. Proposition 5.1 supplies the radical/closed-set correspondence; Theorem 5.3 proves the finite irreducible decomposition for Noetherian spectra; Proposition 5.4 states the prime-ideal criterion but leaves its proof as an exercise. This note supplies proofs of the correspondences and gives the topological version of the finite-decomposition argument. The nonempty convention is explicit above.
- **Book source: Neukirch [S4].** *Algebraic Number Theory*, Ch. I, §13, printed pp. 85–86 / PDF pp. 104–105, checked against rendered pages. The spectrum, residue-field interpretation, and generic-point examples are used in the main discussion; this slice is not cited as a proof of general component theory.
- **Stacks Project.** [§5.8](https://stacks.math.columbia.edu/tag/004U) supplies the general-space conventions and component properties; [§5.9](https://stacks.math.columbia.edu/tag/0050) records the Noetherian-space formulation; [§10.26](https://stacks.math.columbia.edu/tag/00ER) records the arbitrary-ring spectrum statements. These sources complement the book arguments and distinguish which hypotheses are needed.
- **Proof scope.** The displayed criteria, component arguments, and examples are proved here or traced to the indicated results. Zorn's lemma, existence of maximal ideals, basic localization, and the Chinese remainder theorem are imported algebraic inputs. The general theory of geometrically irreducible schemes is outside this note's scope.
- **Terminology boundary.** Irreducibility here concerns topological closed subsets. Irreducibility of a polynomial concerns factorization, and irreducibility of a representation concerns invariant subspaces; their connections require additional arguments and hypotheses.
