---
title: 'Exercise Gal179: A Missing Descent Hypothesis in General Mackey Reciprocity'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 19, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-19
created: '2026-10-23'
---

# Exercise Gal179: A Missing Descent Hypothesis in General Mackey Reciprocity

## Problem Statement

> [!question] Neukirch IV.6.19
> Assume, beyond the condition required in exercise 18, that for every Galois mapping $f:X\to Y$ with cyclic Galois group $G(X\mid Y)$, one has
> $$
> (A(Y):f_*A(X))=[X:Y]\qquad\text{and}\qquad\ker f_*=\operatorname{im}(\sigma^*-1),
> $$
> where $[X:Y]=\#f^{-1}(y)$, with $y\in Y$, and $\sigma$ is a generator of $G(X\mid Y)$. Then if $r_{X\mid Y}$ is an isomorphism for every Galois mapping $f:X\to Y$ of prime degree $[X:Y]$, so is
> $$
> r_{X\mid Y}:G(X\mid Y)^{ab}\longrightarrow A(Y)/f_*A(X),
> $$
> for every Galois mapping $f:X\to Y$.

## Hints

> [!hint]- Hint 1 — first step
> Check which finite $G$-sets can carry an extra summand while every cyclic quotient still has a surjective norm on that summand.

> [!hint]- Hint 2 — proof route
> For a general Mackey functor, cyclic norm axioms need not detect a summand supported only at objects with perfect inertia. A genuine class formation supplies a base; a second summand will preserve every printed hypothesis but obstruct the conclusion.

## Solution

> [!success]- Solution
> **Proof scope:** Independent counterexample and derivation
>
> **Source issue.** Under the printed definition of a general $G$-modulation, the statement is false. The following counterexample checks all open subgroups, all Mackey squares, the unit sequence of Exercise 18, the cyclic norm axioms, and the prime-degree assumption. Its base is an actual global class formation, not the generally invalid guess $H\mapsto H^{ab}$ with transfer descent.
>
> **1. A genuine base.** Take a number field $k$ with a finite $A_5$-Galois extension $E/k$. Such a pair is concrete: the splitting field of $X^5-X+1$ over $\mathbb Q$ has group $S_5$ and discriminant $2869$, and over $k=\mathbb Q(\sqrt{2869})$ its group is $A_5$. Irreducibility modulo $3$ gives transitivity; factorization modulo $2$ has degrees $2,3$, so the group contains a transposition by cubing that element. A transitive group of prime degree is primitive, and a primitive permutation group containing a transposition is the full symmetric group: the graph of conjugate transpositions has invariant connected components and hence is connected, so those transpositions generate $S_5$. These elementary checks are also used in the independent solution VI.§7 Exercise 4.
>
> Choose a cyclotomic $\widehat{\mathbb Z}$-extension $F/k$. It exists by taking the compositum of the cyclotomic $\mathbb Z_\ell$ towers for all primes and then extending scalars to $k$; the resulting open subgroup of $\widehat{\mathbb Z}$ is again isomorphic to $\widehat{\mathbb Z}$. Since $A_5$ is perfect, its abelian quotient corresponding to $E\cap F$ is trivial. Thus
> $$
> G=\operatorname{Gal}(EF/k)=A_5\times\widehat{\mathbb Z},\qquad N=A_5\times\{0\},\qquad d:G\to\widehat{\mathbb Z}
> $$
> is the projection. Write $k_\infty=EF$. For each finite $M/k$ in $k_\infty$, use its idèle class group $C_M$ and take $B=\varinjlim_M C_M$ along inclusions. These inclusions are injective. Hilbert 90 and $I_L^{G(L/M)}=I_M$ give $C_L^{G(L/M)}=C_M$, so $B^H=C_{k_\infty^H}$ for every open $H$. The resulting fixed-module modulation $\mathcal B$ has the usual restrictions and norms and satisfies Mackey's formula.
>
> We use the already independently proved **global class formation theorem** as a named input: for cyclic $L/M$, $C_M/N C_L$ has order $[L:M]$ and $\ker N=(\sigma-1)C_L$; for every finite Galois $L/M$, reciprocity identifies $C_M/N C_L$ with $G(L/M)^{ab}$. This is the idèle-class theorem of Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §§4–5, rather than the general-modulation statement under examination. Project global reciprocity to the chosen procyclic tower. Its image is all $\widehat{\mathbb Z}$: the image is dense, and the connected norm direction is killed while the compact norm-one idèle class group has closed image. Normalize at each finite layer to obtain a surjective modulation valuation $v:\mathcal B\to\widehat{\mathbb Z}$, with restriction multiplier $e$ and norm multiplier $f$.
>
> For an unramified cyclic cover of degree $n$, the unit sequence is exact. Initial injectivity and invariants follow from the just-proved descent. Reciprocity identifies its norm quotient with $\widehat{\mathbb Z}/n\widehat{\mathbb Z}$ via valuation, so every base unit is a norm, and any norm lift has value zero since $n\widehat{\mathbb Z}$ has no torsion. A norm-one unit is $(\sigma-1)a$ by the class formation theorem; choose a base class of value $v(a)$ and divide it out, making $a$ a unit without changing $(\sigma-1)a$. Hence $\mathcal B$ satisfies all hypotheses of Exercise 18 and 19, including the prime-degree reciprocity isomorphisms.
>
> **2. The extra Mackey summand.** On an orbit $G/H$, define
> $$
> T(G/H)=\begin{cases}
> \operatorname{Map}(\mathbb Z/m\mathbb Z,\mathbb F_2),&H\supseteq N, H=N\times m\widehat{\mathbb Z},\\
> 0,&H\not\supseteq N.
> \end{cases}
> $$
> Between supported orbits use pullback of functions for restriction and fiberwise sum for transfer, with the usual translation action of $\widehat{\mathbb Z}$. Every map involving an unsupported source or target is zero. Extend to disjoint unions by products.
>
> This is a genuine Mackey functor, including for mixed graph subgroups of $A_5\times\widehat{\mathbb Z}$. In a double-coset formula $\operatorname{Res}_K^J\operatorname{Ind}_H^J$, if $H$ or $K$ does not contain $N$, the source or target group is zero, so both sides are zero homomorphisms. If both contain $N$, then $J$ and every intersection $K\cap gHg^{-1}$ contain $N$, and the entire formula is precisely the ordinary pullback/fiber-sum Mackey formula on finite $\widehat{\mathbb Z}$-sets. Subgroups containing $N$ are exactly the displayed product subgroups, because they are preimages of open subgroups of $G/N$; all other open subgroups, including graphs, were covered by the zero case. This proves every Mackey square, not just normal-subgroup squares.
>
> Give $T$ valuation zero, and put $A=\mathcal B\oplus T$ with valuation $v(b,t)=v(b)$. Its unit functor is $U_{\mathcal B}\oplus T$; the image of its valuation is the same $Z=\widehat{\mathbb Z}$, which contains $\mathbb Z$ and satisfies $Z/nZ=\mathbb Z/n\mathbb Z$.
>
> **3. All hypotheses survive.** In an unramified cover $H\subseteq J$, the inertia groups $H\cap N$ and $J\cap N$ agree. Thus either both are supported, or both $T$-values are zero. In the supported case $J/H$ is cyclic and acts by regular cyclic permutations on the fibers of the finite sets. On each fiber the elementary sequence
> $$
> 0\to\mathbb F_2\xrightarrow{\mathrm{constant}}\mathbb F_2^n
> \xrightarrow{\mathrm{shift}-1}\mathbb F_2^n
> \xrightarrow{\mathrm{sum}}\mathbb F_2\to0
> $$
> is exact for every $n$, including even $n$: a vector of sum zero is a successive-difference vector, and the kernel of successive differences is the constant vectors. Hence the complete unramified unit sequence remains exact.
>
> If $H\triangleleft J$ and $J/H$ is cyclic with $J$ supported, the image of $N=A_5$ in the cyclic quotient is trivial because $A_5$ is perfect. Therefore $H$ is supported too. The same cyclic permutation computation makes the transfer on $T$ onto, with kernel $\operatorname{im}(\sigma^*-1)$. If $J$ is unsupported, so is $H$, and the $T$ terms are zero. Thus $T$ changes neither the cyclic norm index nor its kernel axiom. It also changes no cyclic reciprocity target, so the prime-degree reciprocity isomorphisms of $\mathcal B$ are retained.
>
> For the power condition of Exercise 18, supported-to-supported transfer is onto. If $J$ is supported and $H\triangleleft J$ is unsupported, $H\cap N$ is a proper normal subgroup of the simple group $N=A_5$, hence is trivial. Thus $[J:H]$ is a multiple of $60$ and annihilates the exponent-$2$ group $T(G/J)$, while transfer from $T(G/H)=0$ is zero. This gives $[J:H]T(G/J)\subseteq\operatorname{Ind}_H^J T(G/H)$. The unsupported-base case is zero. Together with the same power inclusion on $\mathcal B$ (its norm quotient is $G(L/M)^{ab}$), every Galois power condition holds.
>
> **4. Failure of the conclusion.** Take $J=G$ and $H=\{1\}\times\widehat{\mathbb Z}$. Then $J/H=A_5$, the base norm quotient of $\mathcal B$ is $A_5^{ab}=0$, but $T(G/J)=\mathbb F_2$ and $T(G/H)=0$. Therefore
> $$
> A(G/J)/\operatorname{Ind}_H^J A(G/H)\cong\mathbb F_2,
> \qquad (J/H)^{ab}=A_5^{ab}=0.
> $$
> No reciprocity isomorphism between these groups exists. The hypotheses of the printed exercise therefore do not imply its conclusion.
>
> The missing protection is a descent/cohomological condition on the general modulation. Requiring full Galois descent makes it come from a single discrete $G$-module as in Exercise 10 and removes this particular top-supported summand. We do not silently add that condition to the original statement.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Cyclic norm exactness]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Global class formation]]
- [[01 - Group Theory/Concepts/Simple Groups|Perfect simple groups]]

## Notes

Exact source: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 19, printed p.309, PDF p.328], original page inspected. The solution is a counterexample to the printed generality, not a claim that the textbook proves a false theorem. The only deep imported base is the independently proved global idèle class formation and reciprocity theorem, with its hypotheses stated. The construction explicitly checks all open subgroups and Mackey double-coset cases. A tempting substitute base $H\mapsto H^{ab}$ fails the first unramified unit restriction injection for $C_2\times\widehat{\mathbb Z}$ and is deliberately not used.
