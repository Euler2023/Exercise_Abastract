---
title: "Exercise LA482: Lazard's Theorem on Flat Modules as Directed Limits"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - flatness
  - finite-presentation
  - direct-limit
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 13, printed p. 639, PDF p. 654"
created: 2026-09-29
---

# Exercise LA482: Lazard's Theorem on Flat Modules as Directed Limits

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 13 (D. Lazard)
> Let $E$ be a module over a commutative ring $A$. Tensor products are all taken over that ring. Show that the following conditions are equivalent:
>
> (i) There exists a direct family $\{F_i\}$ of free modules of finite type such that
>
> $$
> E\simeq\varinjlim_iF_i.
> $$
>
> (ii) $E$ is flat.
>
> (iii) For every finitely presented module $P$ the natural homomorphism
>
> $$
> \operatorname{Hom}_A(P,A)\otimes_A E
> \longrightarrow\operatorname{Hom}_A(P,E)
> $$
>
> is surjective.
>
> (iv) For every finitely presented module $P$ and homomorphism $f:P\to E$ there exists a free module $F$, finitely generated, and homomorphisms
>
> $$
> g:P\to F\qquad\text{and}\qquad h:F\to E
> $$
>
> such that $f=h\circ g$.
>
> **Remark.** The point of Lazard's theorem lies in the first two conditions: $E$ is flat if and only if $E$ is a direct limit of free modules of finite type.
>
> **Printed hint.** Since the tensor product commutes with direct limits, that (i) implies (ii) comes from the preceding exercise and the definition of flat.
>
> To show that (ii) implies (iii), use Exercise 11.
>
> To show that (iii) implies (iv) is easy from the hypothesis.
>
> To show that (iv) implies (i), use the fact that a module is a direct limit of finitely presented modules (an exercise in Chapter III), and (iv) to get the free modules instead. For complete details, see for instance Bourbaki, *Algèbre*, Chapter X, §1, Theorem 1, p. 14.

> [!info] The directed-system requirement
> “Direct family” means a system indexed by a nonempty directed partially ordered set, equipped with compatible transition maps. The maps need not be injective, and the $F_i$ need not be submodules of $E$. The last implication below constructs such a system explicitly; independently choosing a factorization for each map to $E$ would not establish compatibility.

## Hints

> [!hint]- Hint 1: Interpret a tensor as a factorization
> If the preimage of $f$ in (iii) is $\sum_{j=1}^n\phi_j\otimes e_j$, use $P\to A^n$, $p\mapsto(\phi_1(p),\ldots,\phi_n(p))$, followed by $(a_j)\mapsto\sum_j a_je_j$.

> [!hint]- Hint 2: Build compatible upper stages
> A finite diagram of finite free modules has a finitely presented colimit: present it using the finite sum of its modules and the finite sum of the sources of its arrows. Condition (iv) therefore supplies a finite free cone over that diagram. Repeatedly add such cones over finite downward-closed diagrams, and also ensure that every element mapping to zero in $E$ vanishes at a later stage.

## Solution

> [!success]- Independent derivation with an explicit directed partially ordered set
> All modules and tensor products are over $A$. We use the element description of directed limits proved in LA481: each element has a representative at one stage, and such a representative is zero in the limit exactly when it becomes zero at a later stage.
>
> **(i)$\Rightarrow$(ii).** Let $u:N'\hookrightarrow N$ be an injection. Each finite free $F_i\simeq A^{r_i}$ is flat, since tensoring with it is the finite direct-sum functor $N\mapsto N^{r_i}$. Thus $u\otimes\operatorname{id}_{F_i}$ is injective for every $i$. By LA481, the tensor of $u$ with $E\simeq\varinjlim_iF_i$ identifies with
>
> $$
> \varinjlim_i(N'\otimes F_i)
> \longrightarrow\varinjlim_i(N\otimes F_i).
> $$
>
> If an element in its source maps to zero, represent it by $z_i\in N'\otimes F_i$. Its image becomes zero in $N\otimes F_j$ for some $j\ge i$. The corresponding image $z_j\in N'\otimes F_j$ must be zero, by injectivity at stage $j$. Hence the original limit element is zero. Tensoring with $E$ preserves injections, so $E$ is flat.
>
> **(ii)$\Rightarrow$(iii).** Apply the Hom–tensor comparison proved in LA480 with $M=A$. Since $P$ is finitely presented and $E$ is flat, it gives an isomorphism
>
> $$
> \operatorname{Hom}_A(P,A)\otimes E
> \simeq\operatorname{Hom}_A(P,A\otimes E)
> \simeq\operatorname{Hom}_A(P,E).
> $$
>
> In particular the required map is surjective. The relevant comparison proof uses a finite free presentation of $P$, exactness after tensoring with $E$, and the identification of Hom out of a finite free module with a finite direct sum.
>
> **(iii)$\Rightarrow$(iv).** Let $f:P\to E$. By (iii), choose a finite expression $\sum_{j=1}^n\phi_j\otimes e_j$ mapping to $f$. Thus
>
> $$
> f(p)=\sum_{j=1}^n\phi_j(p)e_j\qquad(p\in P).
> $$
>
> Put $F=A^n$, define $g(p)=(\phi_1(p),\ldots,\phi_n(p))$, and define $h(a_1,\ldots,a_n)=\sum_j a_je_j$. Both maps are linear and $hg=f$. The zero expression may use $F=A^0=0$.
>
> **(iv)$\Rightarrow$(i), step 1: finite diagrams have finite free cones.** Suppose $Q$ is a finite partially ordered set, with finite free modules $F_q$, compatible maps $f_{qr}:F_q\to F_r$ for $q\le r$, and maps $u_q:F_q\to E$ satisfying $u_rf_{qr}=u_q$. Form
>
> $$
> V=\bigoplus_{q\in Q}F_q,
> \qquad
> U=\bigoplus_{\substack{q,r\in Q\\q<r}}F_q.
> $$
>
> Both modules are finite free. Let $j_q:F_q\to V$ denote the summand inclusions, and define $d:U\to V$ on the summand belonging to $(q,r)$ by
>
> $$
> x\longmapsto j_q(x)-j_r(f_{qr}(x)).
> $$
>
> Then $P=\operatorname{coker}d$ is finitely presented. The maps $u_q$ define a map $V\to E$ that kills $\operatorname{im}d$, so they induce $u:P\to E$. By (iv), factor $u$ through a finite free module $H$, say $P\xrightarrow{v}H\xrightarrow{h}E$. Composing $F_q\xrightarrow{j_q}V\to P\xrightarrow{v}H$ gives maps $c_q:F_q\to H$ satisfying
>
> $$
> c_rf_{qr}=c_q,
> \qquad hc_q=u_q.
> $$
>
> These equations say precisely that $(H,h,(c_q))$ is a cone over the finite diagram compatible with its maps to $E$. We may choose a basis of $H$ and replace it by some standard module $A^m$. The same construction includes the empty diagram, using the zero module.
>
> **Step 2: construct a directed partially ordered index set.** We construct increasing partially ordered sets
>
> $$
> I_0\subseteq I_1\subseteq I_2\subseteq\cdots,
> $$
>
> together with standard finite free modules $F_i$, maps $u_i:F_i\to E$, and compatible transition maps. Each index will have only finitely many predecessors, including itself.
>
> Let $I_0$ consist of all pairs $(n,u)$ with $n\ge0$ and $u:A^n\to E$ linear, ordered discretely. At this index set $F_i=A^n$ and $u_i=u$. This is a set: such maps are determined by finite tuples in the underlying set of $E$.
>
> Suppose the system on $I_s$ has been defined. A subset $Q\subseteq I_s$ is called downward closed if $q\in Q$ and $p\le q$ imply $p\in Q$. For every finite downward-closed $Q$, and for every cone $(A^m,h,(c_q)_{q\in Q})$ over its diagram satisfying the equations in step 1, adjoin a new index $t$. Give every new index a distinct label recording the stage and its cone data. Set
>
> $$
> F_t=A^m,\qquad u_t=h,\qquad f_{qt}=c_q\quad(q\in Q).
> $$
>
> Declare the strict predecessors of $t$ to be exactly the elements of $Q$; leave distinct new indices incomparable, and retain all old order relations and maps. Downward closure of $Q$ makes the enlarged relation transitive, and no new index lies below an old one, so it is a partial order. The cone identities ensure $f_{rt}f_{qr}=f_{qt}$ whenever $q\le r<t$, as well as $u_tf_{qt}=u_q$. Hence the transition maps remain compatible. The down-set of $t$ is $Q\cup\{t\}$, which is finite, and old down-sets do not change. There is only a set of cone data, since all the modules are standard finite free modules and all the linear maps are elements of sets of matrices or finite tuples. This defines $I_{s+1}$.
>
> Now let $I=\bigcup_{s\ge0}I_s$, with the resulting modules and maps. It is nonempty because $I_0$ contains $(0,0)$. Given $i,j\in I$, choose $s$ with $i,j\in I_s$. The union of their down-sets is a finite downward-closed subset $Q\subseteq I_s$. Step 1 supplies a cone over $Q$, and the construction of $I_{s+1}$ adds an index above every element of $Q$, in particular above $i$ and $j$. Thus $I$ is directed. All composition identities hold because any finite collection of indices is already present at some finite stage.
>
> **Step 3: identify the limit with $E$.** The compatible $u_i$ induce
>
> $$
> u:\varinjlim_{i\in I}F_i\longrightarrow E.
> $$
>
> This is surjective: for each $e\in E$, the initial stage $(1,u_e)$, where $u_e:A\to E$ sends $1$ to $e$, represents $e$.
>
> To prove injectivity, represent an element in $\ker u$ by $x\in F_i$. Then $u_i(x)=0$, so $u_i$ factors through the finitely presented module
>
> $$
> P_x=F_i/Ax.
> $$
>
> It is finitely presented because $A\to F_i\to P_x\to0$, with $1\mapsto x$, is a finite free presentation. Apply (iv) to the induced $P_x\to E$ and choose a factorization $P_x\to H\xrightarrow{h}E$ with $H$ finite free, replaced by a standard $A^m$ if necessary. The composite $c:F_i\to P_x\to H$ satisfies $c(x)=0$ and $hc=u_i$.
>
> Choose $s$ with $i\in I_s$, and take $Q$ to be the finite down-set of $i$. For $q\in Q$, the maps $c_q=cf_{qi}:F_q\to H$ form a cone over $Q$, with $hc_q=u_q$. This exact cone is included among the cone data used to build $I_{s+1}$. Its new index $t$ satisfies $t\ge i$ and $f_{it}=c$. Thus $x$ maps to zero in $F_t$. By the element criterion for directed limits, it represents zero in $\varinjlim F_i$. Hence $u$ is injective and therefore an isomorphism.
>
> We have constructed the directed system required in (i) and proved every implication.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated and Finitely Presented Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA480 - Hom and Tensor Comparison for Finite Presentations|Exercise LA480]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA481 - Tensor Products Commute with Directed Limits|Exercise LA481]]

## Notes

- **Source and proof status:** The four conditions, remark, and complete printed hint were checked against [S2, Ch. XVI, Ex. 13, printed p. 639, PDF p. 654]. The definition of a directed family with compatible maps was checked at [S2, Ch. III, §10, printed p. 160, PDF p. 175]. The solution is an independent derivation using the fully proved Hom comparison and tensor-limit results in LA480–LA481.
- **Completeness boundary:** Lang's hint refers the details of the last implication to Bourbaki. That reference is retained as part of the printed hint, but no unverified Bourbaki theorem is used here. Steps 1–3 provide the finite-presentation, compatibility, directedness, surjectivity, and injectivity arguments explicitly.
- **Indexing boundary:** The constructed index set is an actual directed partially ordered set. No equivalence between filtered categories and directed partially ordered indexing is assumed, and no assertion that a flat module is a union of finite free submodules is made.
