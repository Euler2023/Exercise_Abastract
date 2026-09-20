---
title: Connectedness and Connected Components
aliases:
  - Connectedness
  - Connected Components
  - Connected Spaces
  - 连通性
  - 连通空间
  - 连通分支
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
  - topology
  - connected-space
created: 2026-09-20
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercise 14, printed p. 411, PDF p. 426; The Stacks Project, Topology §5.7, Definition 5.7.1 and Lemmas 5.7.2–5.7.3, Tags 004S, 0376, 004T"
source_status: verified
status: not-started
---

# Connectedness and Connected Components

## Definition

> [!info] Connectedness and separation
> A topological space $X$ is **connected** if there are no disjoint, nonempty open subsets $U,V$ with $X=U\cup V$. Such a decomposition is called a **separation**. A subset of $X$ is connected when it is connected in its subspace topology.
>
> A subset is **clopen** if it is both open and closed. Thus $X$ is connected exactly when its only clopen subsets are $\varnothing$ and $X$.

Indeed, in a separation, $U=X\setminus V$ and $V=X\setminus U$ are also closed. Conversely, a nonempty proper clopen subset and its complement form a separation. This also proves the equivalent formulation using two disjoint nonempty closed subsets.

This is the definition used for spectra in **Lang, Chapter IX, Exercise 14**, printed p. 411 / PDF p. 426; that exercise motivates the idempotent criterion below.

> [!warning] The empty-space convention
> Following the separation criterion as printed in Lang and used in R275, this note allows the empty space to be connected. [Stacks, Definition 5.7.1](https://stacks.math.columbia.edu/tag/004S) additionally requires a connected space to be nonempty. Statements about nonempty spaces agree. Here a **connected component** is, by definition, a maximal **nonempty** connected subset, so the empty space has no connected components under either convention.

## Intuition

Connectedness asks whether the whole space can be split into two pieces that are topologically separated from each other. It does not prohibit a decomposition into intersecting closed pieces. This distinction explains why two intersecting algebraic curves can form a connected but reducible space.

For $\operatorname{Spec}(A)$, a clopen decomposition records an algebraic decomposition of $A$ into a product. An idempotent acts as an indicator: it is $1$ on one factor and $0$ on the other.

## Key Properties

### Continuous images

If $f:X\to Y$ is continuous and $C\subseteq X$ is connected, then $f(C)$ is connected. To prove this, pull back a hypothetical separation of $f(C)$ along the surjection $f|_C:C\to f(C)$. Its two inverse images are disjoint, nonempty, open in $C$, and cover $C$, a contradiction. See [Stacks, Lemma 5.7.2](https://stacks.math.columbia.edu/tag/0376).

### Closures, unions, and connected components

The following are the elementary component properties in [Stacks, Lemma 5.7.3](https://stacks.math.columbia.edu/tag/004T).

- **Closure:** If $C$ is connected, so is $\overline C$. A separation of $\overline C$ forces $C$ into one of its closed pieces, hence forces its closure there too.
- **Union with a common point:** If connected subsets $C_i$ all contain $x$, then $\bigcup_i C_i$ is connected. In any separation, each $C_i$ must lie in the piece containing $x$.
- **Existence and uniqueness:** For $x\in X$, set

$$
C(x)=\bigcup\{C\subseteq X:x\in C\text{ and }C\text{ is connected}\}.
$$

The union property makes $C(x)$ connected. Every connected set meeting it has connected union with it, hence is contained in it by its definition. Thus $C(x)$ is the unique component containing $x$. Consequently, components partition $X$, and every nonempty connected subset lies in a unique component. Finally, $\overline{C(x)}$ is connected, so maximality gives $\overline{C(x)}=C(x)$: components are closed.

Components need not be open; see the rational-number example below. If $X$ has only finitely many components, however, each is open because its complement is a finite union of closed components.

## Connectedness of a Ring Spectrum

Throughout this section, rings are commutative with identity. Lang asks for the following equivalences in **Chapter IX, Exercise 14**, printed p. 411 / PDF p. 426:

$$
\begin{aligned}
\operatorname{Spec}(A)\text{ is connected}
&\Longleftrightarrow \text{every }e\in A\text{ with }e^2=e\text{ belongs to }\{0,1\}\\
&\Longleftrightarrow A\text{ is not a product of two nonzero rings}.
\end{aligned}
$$

The full independent proof is in [[02 - Ring Theory/Exercises/Exercise R275 - Connectedness of Spec and Idempotents in Commutative Rings|Exercise R275]]. Its mechanism is as follows.

**From an idempotent to a separation.** If $e^2=e$, then $e(1-e)=0$ and $e+(1-e)=1$. Every prime contains exactly one of $e$ and $1-e$, so

$$
\operatorname{Spec}(A)=D(e)\amalg D(1-e),
\qquad D(e)=V(1-e).
$$

Both pieces are clopen. If $e\ne0,1$, both are nonempty: for example, $D(e)=\varnothing$ would make $e$ nilpotent, whereas an idempotent satisfies $e^n=e$ for every $n\ge1$ and therefore would be zero.

**From a separation to an idempotent.** Write the two closed pieces as $V(I)$ and $V(J)$. Disjointness gives $I+J=A$, so choose $a\in I,b\in J$ with $a+b=1$. Their union is the whole spectrum, giving $IJ\subseteq\sqrt{(0)}$; choose $N\ge1$ with $(ab)^N=0$. Split the expansion of $(a+b)^{2N}=1$ into the terms with exponent of $a$ at least $N$ and the remaining terms. The two sums $e,f$ satisfy

$$
e+f=1,\qquad e\in I,\qquad f\in J,\qquad ef=0.
$$

Indeed, the first sum is divisible by $a^N$ and the second by $b^N$. Hence $e^2=e$ and $f^2=f$. Neither is zero or one, since that would put $1$ in $I$ or $J$ and make one closed piece empty.

**From an idempotent to a product.** The maps

$$
A\longrightarrow Ae\times A(1-e),\qquad
a\longmapsto(ae,a(1-e)),
$$

and $(u,v)\mapsto u+v$ are inverse ring isomorphisms; the factors have identities $e$ and $1-e$. Conversely, a product of two nonzero rings has the nontrivial idempotent $(1,0)$.

For the zero ring, $\operatorname{Spec}(A)=\varnothing$ and $0=1$, so the displayed criterion still holds with this note's convention. With the Stacks convention, append the hypothesis $A\ne0$.

## Connectedness, Path Connectedness, and Irreducibility

A nonempty space $X$ is **path connected** if, for every $x,y\in X$, there is a continuous map $\gamma:[0,1]\to X$ with $\gamma(0)=x$ and $\gamma(1)=y$. Every path connected space is connected: a separation would pull back along a path joining its two pieces to a separation of $[0,1]$. This uses the elementary real-analysis fact that intervals are connected.

Connectedness alone does not guarantee paths; the sine-curve example below explains the obstruction. In algebraic geometry, connectedness of a spectrum refers to its Zariski topology, and does not assert the existence of paths in an associated Euclidean space of rational or complex points.

An [[08 - Arithmetic Geometry/Concepts/Irreducible Topological Spaces and Components|irreducible space]] is nonempty and cannot be written as the union of two proper closed subsets, even if those subsets intersect. It is connected because a separation would be such a union. The converse fails for intersecting coordinate axes.

## Examples

> [!example] Connected but reducible: two coordinate axes
> Let $k$ be any field and $A=k[x,y]/(xy)$. Every prime of $A$ contains $x$ or $y$, so
> $$
> \operatorname{Spec}(A)=V(x)\cup V(y).
> $$
> Here $V(x)\cong\operatorname{Spec}(k[y])$ and $V(y)\cong\operatorname{Spec}(k[x])$. Each is irreducible because its coordinate ring is a domain, hence connected. They meet at the prime $(x,y)$, so their union is connected. Both are proper: the prime $(y)$ is outside $V(x)$, and $(x)$ is outside $V(y)$. Thus this spectrum is reducible, with two irreducible components and just one connected component.

> [!example] A disconnected spectrum
> For a field $k$, the spectrum of $k\times k$ has two points. The idempotents $(1,0)$ and $(0,1)$ give its two nonempty clopen singletons. In contrast, $k[\varepsilon]/(\varepsilon^2)$ has only the prime $(\varepsilon)$, so its spectrum is connected despite the nonzero nilpotent $\varepsilon$.

> [!example] Closed components that are not open
> Give $\mathbb Q$ the topology inherited from $\mathbb R$. If a subset contains distinct $p<q$, choose an irrational $r$ between them. Its intersections with $(-\infty,r)$ and $(r,\infty)$ separate that subset. Thus the connected components of $\mathbb Q$ are singletons. They are closed but not open, since every real interval about a rational point contains other rational points.

> [!example]- Connected does not imply path connected
> Let
> $$
> G=\{(x,\sin(1/x)):0<x\le1\},\qquad
> T=G\cup(\{0\}\times[-1,1])\subset\mathbb R^2.
> $$
> The set $G$ is a continuous image of the connected interval $(0,1]$, and $T=\overline G$: every height in $[-1,1]$ occurs along sequences with $x\to0$, and continuity determines all limit points with positive first coordinate. Hence $T$ is connected.
>
> Suppose a path $\gamma(t)=(u(t),v(t))$ in $T$ joins the vertical segment at time $0$ to $G$ at time $1$. Let $a$ be the largest zero of $u$, which exists because its zero set is a nonempty compact subset of $[0,1]$ and $u(1)>0$. Then $a<1$ and $u(t)>0$ for $a<t\le1$.
>
> For every sufficiently small $\delta>0$, the intermediate value theorem shows that $u([a,a+\delta])$ contains $[0,u(a+\delta)]$. Within this interval there are arbitrarily small positive numbers at which $\sin(1/x)=1$, and others at which it is $-1$. Thus $v$ attains both values arbitrarily close to $a$ from the right, contradicting its continuity at $a$. No such path exists. This independent example uses only interval connectedness, the intermediate value theorem, and elementary compactness in $\mathbb R$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Irreducible Topological Spaces and Components|Irreducible Topological Spaces and Components]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

- **Book source and primary algebraic application:** [S2, Serge Lang, *Algebra*, revised third edition, Chapter IX, Exercise 14, printed p. 411, PDF p. 426] supplies the connectedness definition for spectra and asks for the idempotent/product-ring equivalence. The original PDF page was rendered and inspected. Lang poses the equivalence as an exercise; it is not a proof contained in that page. R275 gives the independent solution, whose construction is summarized above.
- **General topology source:** Stacks Definition 5.7.1 and Lemmas 5.7.2–5.7.3, linked at the relevant statements, supply the component framework and general topology results with proofs. The short arguments here are written in the notation of this note. The difference in the empty-space convention is stated explicitly.
- **Independent applications:** The coordinate-axis, product-ring, dual-number, rational-number, and sine-curve examples are verified in the note. The irreducibility of the spectrum of a domain is justified in the linked irreducibility concept. The sine-curve discussion declares its elementary real-analysis inputs. No general theorem identifying connected components with clopen subsets is assumed: components need not be open.
