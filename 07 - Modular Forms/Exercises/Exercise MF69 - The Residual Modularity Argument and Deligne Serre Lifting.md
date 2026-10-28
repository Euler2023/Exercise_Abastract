---
title: "Exercise MF69: The Residual Modularity Argument and Deligne Serre Lifting"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.6, Exercise 9.6.4, printed pp. 409–411, PDF pp. 421–423"
source_refs:
  - "S7/ch-9/sec-6/ex-4"
created: 2026-10-28
---

# Exercise MF69: The Residual Modularity Argument and Deligne Serre Lifting

## Problem Statement

> [!question] Original Exercise 9.6.4
> This last exercise carries out the first part of the argument in [Wil95].
>
> (a) It is known that $\mathrm{PGL}_2(\mathbb F_3)\cong S_4$. Show the assignment
> $$
> \begin{pmatrix}-1&1\\-1&0\end{pmatrix}\longmapsto\begin{pmatrix}-1&1\\-1&0\end{pmatrix},\qquad
> \begin{pmatrix}1&-1\\1&1\end{pmatrix}\longmapsto\begin{pmatrix}1&-1\\-\sqrt{-2}&-1+\sqrt{-2}\end{pmatrix}
> $$
> defines an embedding $i:\mathrm{GL}_2(\mathbb F_3)\to\mathrm{GL}_2(\mathbb Z[\sqrt{-2}])$. Here $\mathbb Z[\sqrt{-2}]=\mathcal O_K$ for $K=\mathbb Q(\sqrt{-2})$. Show $\lambda=(1+\sqrt{-2})$ is maximal over $3$, with residue field $\mathbb F_3$, and reduction after $i$ is identity. (Hints for this exercise are at the end of the book.)
>
> (b) Let $E/\mathbb Q$ be an elliptic curve and let $f\in S_1(M_f,\psi)$ be the Langlands–Tunnell newform such that $\rho_{f,\lambda}\sim i\circ\overline\rho_{E,3}$. By Proposition 9.3.5 assume an integral realization. Show its reduction is $\overline\rho_{E,3}$, and $a_p(f)\equiv a_p(E)\pmod\lambda$ for all but finitely many $p$. Show $\psi$ is the quadratic character of conductor $3$, so $\psi(p)\equiv p\pmod\lambda$ for all primes $p$.
>
> (c) For the weight-one Eisenstein series $E_1^{\psi,1}\in M_1(3,\psi)$, show
> $$
> 3E_1^{\psi,1}=1+\sum_{n\ge1}a_nq^n,\qquad a_n\in3\mathbb Z.
> $$
> Put $g=3E_1^{\psi,1}f$. Show $g\in S_2(\Gamma_0(3M_f))$ and $f\equiv g\pmod\lambda$ coefficientwise.
>
> (d) Although the product $g$ need not be an eigenform, show $T_pg\equiv a_p(E)g\pmod\lambda$ for almost all $p$ and $Tg\equiv a_1(Tg)g\pmod\lambda$ for every $T\in\mathbb T_{\mathbb Z}$. Deduce
> $$
> \varphi:\mathbb T_{\mathbb Z}\to\mathbb F_3,\qquad T\mapsto a_1(Tg)\pmod\lambda
> $$
> is a homomorphism taking $T_p$ to $a_p(E)\pmod3$ and $\langle p\rangle$ to $1$ for almost all $p$.
>
> (e) Let $\mathfrak m=\ker\varphi$ and let $P\subseteq\mathfrak m$ be a minimal prime of $\mathbb T_{\mathbb Z}$, as in Exercise 8.5.6. The quotient is a domain finite over $\mathbb Z$. Since the Hecke algebra is free over $\mathbb Z$, no rational prime is a zero divisor, hence none belongs to $P$. Thus its fraction field is a number field $K'$ and it embeds in $\mathcal O_{K'}$, giving $\varphi':\mathbb T_{\mathbb Z}\to\mathcal O_{K'}$. Choose $\lambda'\supseteq\varphi'(\mathfrak m)$ by Lemma 8.5.5 or lying-over. Show $\varphi'(T_p)\equiv a_p(E)$ and $\varphi'(\langle p\rangle)\equiv1\pmod{\lambda'}$ for almost all $p$.
>
> (f) Show the natural surjection $\pi:\mathbb T_{\mathbb Z}\otimes\mathbb C\to\mathbb T_{\mathbb C}$, $\sum T_i\otimes z_i\mapsto\sum z_iT_i$, is an isomorphism. In Theorem 6.5.4, $V=H_1(X_1(N),\mathbb Z)\otimes\mathbb C$ has faithful action. Explain how this gives faithful action on $S_2\oplus S_2^\vee$ by
> $$
> \Big(\sum T_i\otimes z_i\Big)(f,\phi)=\Big(\sum z_iT_if,\ \phi\circ\sum z_iT_i\Big),
> $$
> and deduce injectivity of $\pi$.
>
> (g) Extend $\varphi'$ to $\mathbb T_{\mathbb C}\to\mathbb C$ via a complex embedding of $\mathcal O_{K'}$. Use the pairing from Proposition 6.6.4 to obtain an eigenform $g'\in S_2(\Gamma_1(3M_f))$ with coefficients in $\mathcal O_{K'}$ and $\varphi'(T)=a_1(Tg')$. Prove $a_p(g')\equiv a_p(E)$ and $\chi_{g'}(p)\equiv1\pmod{\lambda'}$ for almost all $p$. Parts (e) and (g) are the Deligne–Serre Lifting Lemma.
>
> (h) Let $g''$ be the newform associated to $g'$ by Proposition 5.8.4. Show $K_{g''}\subseteq K_{g'}$ and $a_p(g'')\equiv a_p(E)\pmod{\lambda''}$ for almost all $p$, where $\lambda''=K_{g''}\cap\lambda'$. Use Exercise 9.6.1 to conclude $\overline\rho_{g'',\lambda''}\sim\overline\rho_{E,3}$, so the latter is modular as in Definition 9.6.10.

## Hints

> [!hint]- Hint 1
> For (a), compute in the exact ring of pairs $(a,b)$ representing $a+b\sqrt{-2}$; reduction is $a-b\pmod3$.

> [!hint]- Hint 2
> For (c)–(d), the Eisenstein multiplier is $1$ modulo $3$, and the weight-one character satisfies $\psi(p)\equiv p\pmod3$.

> [!hint]- Hint 3
> For (e)–(h), lift the residual Hecke character through a characteristic-zero component and recover a normalized eigenform from the perfect pairing.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **Scope of the argument.** Parts (b) and (h) use the case where $\overline\rho_{E,3}$ is irreducible. Langlands–Tunnell supplies a cuspidal weight-one form for the odd irreducible complex lift, whose projective image is solvable because it is a subgroup of $S_4$. If the residual representation is reducible, this cuspidal argument does not apply as written; the separate reducible/Eisenstein modularity statement is Theorem 9.6.6. We prove every requested step under the irreducible hypothesis implicit in this construction. Deep named inputs are listed in Notes.
>
> **(a).** Put $s=\sqrt{-2}$ and denote the two lifted matrices by $A,B$. Their determinants are $1,-1$, respectively. The quotient $\mathbb Z[s]/(1+s)$ sets $s=-1$ and $s^2=-2$, hence $3=0$; conversely these substitutions give a surjection to $\mathbb F_3$ with precisely this kernel. Equivalently $N(1+s)=3$. Thus $\lambda$ is maximal and the reductions of $A,B$ are the printed source matrices.
>
> Here is a finite exact verification that the two assignments give a well-defined section, including all relations rather than only the orders of the generators. Represent a ring element by $(a,b)$, with
> $$
> (a,b)(c,d)=(ac-2bd,ad+bc),\qquad\overline{(a,b)}=a-b\pmod3.
> $$
> Starting at $I$, repeatedly multiply on the right by $A$ and $B$ and retain each new exact matrix. The following reproducible algorithm was run with integer arithmetic:
> ```python
> from collections import deque, Counter
> add = lambda x,y: (x[0]+y[0], x[1]+y[1])
> mul = lambda x,y: (x[0]*y[0]-2*x[1]*y[1], x[0]*y[1]+x[1]*y[0])
> def mm(X,Y):
>     return tuple(add(mul(X[2*i],Y[j]),mul(X[2*i+1],Y[2+j]))
>                  for i in range(2) for j in range(2))
> I = ((1,0),(0,0),(0,0),(1,0))
> A = ((-1,0),(1,0),(-1,0),(0,0))
> B = ((1,0),(-1,0),(0,-1),(-1,1))
> seen, queue = {I:0}, deque([I])
> while queue:
>     X = queue.popleft()
>     for Y in (A,B):
>         Z = mm(X,Y)
>         if Z not in seen:
>             seen[Z] = seen[X]+1
>             queue.append(Z)
> red = lambda X: tuple((a-b)%3 for a,b in X)
> assert len(seen) == len({red(X) for X in seen}) == 48
> assert all((z[0]*z[3]-z[1]*z[2])%3 for z in map(red,seen))
> assert dict(Counter(seen.values())) == {0:1,1:2,2:4,3:7,4:12,5:18,6:4}
> ```
> The final set is closed under both generators by the termination condition. A finite multiplicatively closed subset of a group containing the identity is a subgroup, since powers supply inverses. Its 48 distinct reductions fill $\mathrm{GL}_2(\mathbb F_3)$, whose order is $(9-1)(9-3)=48$. Reduction is consequently a group isomorphism; its inverse is the required embedding $i$. This proves that the proposed generator images respect every relation. The computation is finite algebra verification, not evidence for an unproved infinite claim.
>
> **(b).** Choose the lift in its explicit integral model $i\overline\rho_{E,3}$. Its reduction is exactly $\overline\rho_{E,3}$ by (a); equivalence of the weight-one representation permits this model. At unramified primes, equality of traces gives $a_p(f)\equiv a_p(E)\pmod\lambda$. Units of $\mathbb Z[s]$ are $\{\pm1\}$, since $a^2+2b^2=1$ has only those solutions. Thus $\det i$ takes values $\pm1$, and reduction identifies it with the mod-three determinant. The latter is the cyclotomic character modulo three, by the Weil pairing. Hence $\det\rho_f=\psi$ is exactly the nontrivial quadratic character modulo three, whose conductor is three. Its values at primes are $1,-1,0$ according as $p\equiv1,2,0\pmod3$, proving $\psi(p)\equiv p\pmod\lambda$ including $p=3$.
>
> The weight-one newform has its coefficients in $K$: its good-prime coefficients are the traces of the finite $K$-representation. For any automorphism fixing $K$, Strong Multiplicity One identifies the conjugate newform with $f$, hence fixes every coefficient. Their integrality puts them in $\mathcal O_K$, whose residue field here is exactly $\mathbb F_3$. This also explains the codomain in (d).
>
> **(c).** The Section 4.8 normalization gives
> $$
> E_1^{\psi,1}=\frac13+2\sum_{n\ge1}\left(\sum_{d\mid n}\psi(d)\right)q^n.
> $$
> For example its constant is $-\sum_{a=1}^3\psi(a)a/3=1/3$ because $\psi(1)=1$, $\psi(2)=-1$. Thus $3E_1^{\psi,1}=1+6\sum_{n\ge1}(\sum_{d\mid n}\psi(d))q^n$, proving the divisibility. The product with the cusp form $f$ has weight two, character $\psi^2=1$ and level dividing $3M_f$; its vanishing at each cusp follows from one holomorphic factor times a vanishing factor in the local cusp expansions. It is therefore in the claimed cusp space and has $g\equiv f\pmod\lambda$ and $a_1(g)=1$.
>
> **(d).** Since the conductor of $\psi$ is three, $3\mid M_f$; consequently the primes dividing $3M_f$ already divide $M_f$. At a prime away from this level the weight-one and weight-two formulas are
> $$
> a_n(T_pf)=a_{pn}(f)+\psi(p)a_{n/p}(f),\qquad
> a_n(T_pg)=a_{pn}(g)+p\,a_{n/p}(g).
> $$
> They agree modulo $\lambda$, so $T_pg\equiv a_p(f)g$. At a level prime both operators use $a_{pn}$ alone, and the same conclusion holds. Multiplicativity for coprime indices and the prime-power Hecke recurrence then give $T_ng\equiv a_n(f)g$ for every $n$; the recurrences agree modulo $\lambda$ for the same reason. Diamonds act trivially on $g$ exactly. The integral Hecke algebra is generated by these operators and diamonds. Thus every $T$ acts on the nonzero line generated by $\bar g$, and its scalar is $a_1(Tg)$ because $a_1(g)=1$. This proves the stated scalar congruence for all $T$. Composition and addition of scalar actions prove that $\varphi$ is a unital ring homomorphism. At good primes the scalar is $a_p(E)\pmod3$ by (b), and the diamond scalar is one.
>
> **(e).** The algebra $\mathbb T_{\mathbb Z}$ is a finite free $\mathbb Z$-module and hence Noetherian. A minimal prime below $\mathfrak m$ exists. In a Noetherian ring each minimal prime is an associated prime, so every element in it is a zero divisor. This named commutative-algebra input implies $P\cap\mathbb Z=0$, since multiplication by a nonzero integer is injective on the free module. Thus $B=\mathbb T_{\mathbb Z}/P$ is a characteristic-zero domain finite over $\mathbb Z$. Every element is integral by the determinant trick; its fraction field $K'$ is finite over $\mathbb Q$, and $B\subseteq\mathcal O_{K'}$. Lying-over for the integral extension $B\subseteq\mathcal O_{K'}$ supplies $\lambda'$ above $\mathfrak m/P$. In particular $3\in\lambda'$. Every $T_p-a_p(E)$ and $\langle p\rangle-1$ belonging to $\mathfrak m$ maps into $\lambda'$, giving the desired congruences.
>
> **(f).** The action of $\mathbb T_{\mathbb Z}$ on the integral homology lattice is an injection into a finite matrix ring over $\mathbb Z$. Extending scalars to $\mathbb C$ preserves that injection: an integer matrix of full column rank still has full column rank over $\mathbb C$. Thus its complexified homology action is faithful. The period decomposition and the Fricke identification of conjugate differential duals in the proof of Theorem 6.5.4 identify this action with the displayed action on $S_2\oplus S_2^\vee$. These are the source's Hecke-equivariant identifications, not an assumption that complexifying a faithful action on $S_2$ alone is automatically faithful. If $x=\sum T_i\otimes z_i$ lies in $\ker\pi$, then $\sum z_iT_i$ is the zero operator on $S_2$ and its dual is zero on $S_2^\vee$. Hence $x$ kills both summands, so faithfulness gives $x=0$. This proves injectivity and the isomorphism.
>
> **(g).** Extend the character to $\lambda_0:\mathbb T_{\mathbb C}\to\mathbb C$. The perfect pairing $\langle T,h\rangle=a_1(Th)$ gives a unique $g'$ with $\langle T,g'\rangle=\lambda_0(T)$. In particular $a_1(g')=\lambda_0(1)=1$. For $U,T$ in the algebra,
> $$
> \langle T,Ug'\rangle=\lambda_0(TU)=\lambda_0(U)\lambda_0(T)=\langle T,\lambda_0(U)g'\rangle.
> $$
> Nondegeneracy implies $Ug'=\lambda_0(U)g'$. Moreover $a_n(g')=\lambda_0(T_n)=\varphi'(T_n)\in\mathcal O_{K'}$. Part (e) proves the stated $a_p$ and diamond congruences, the latter being $\chi_{g'}(p)\equiv1$. One can work throughout with the Hecke algebra on $S_2(\Gamma_0(3M_f))$, as $g$ already lies there; then $g'$ can be chosen in that subspace and its character is exactly trivial. This implies the source's weaker $\Gamma_1$ and character-congruence assertions.
>
> **(h).** The associated normalized newform $g''$ has the same eigenvalues as $g'$ away from their levels. Every automorphism fixing $K_{g'}$ therefore fixes its almost-all-prime coefficients; Strong Multiplicity One forces it to fix $g''$. Hence $K_{g''}\subseteq K_{g'}\subseteq K'$. Precisely, the source shorthand $K_{g''}\cap\lambda'$ means the prime ideal $\lambda''=\mathcal O_{K_{g''}}\cap\lambda'$, not an ideal of the field. The congruences descend to this prime. Thus the two residual representations have the same traces and determinants at almost all Frobenius elements, with determinants agreeing by the character congruence and the mod-three cyclotomic identity. Their finite images and Chebotarev extend these equalities to all group elements.
>
> The representation $\overline\rho_{E,3}$ is irreducible by the stated scope and odd; complex conjugation has eigenvalues $1,-1$ in characteristic three. The matrix proof of Exercise 9.6.1 works over any field of characteristic different from two, so apply it after extending both residue fields to a common algebraic closure of $\mathbb F_3$. Irreducibility remains absolute here: a common invariant line must be an eigenspace of this conjugation, hence one of its two rational coordinate lines. The explicit comparison therefore proves residual equivalence, establishing modularity in Definition 9.6.10.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Scope qualification:** The cuspidal Langlands–Tunnell step requires the irreducible residual case; the reducible case belongs to Theorem 9.6.6. The printed exercise leaves this condition implicit.
- **Imported deep inputs:** Langlands–Tunnell for an odd irreducible representation with solvable projective image; the weight-one Galois correspondence and coefficient integrality; Strong Multiplicity One; Chebotarev; the period/Fricke module decomposition; the associated-newform theorem. These are used with their hypotheses, not reproved.
- **Imported commutative-algebra inputs:** Existence of minimal primes and their associated-prime property in a Noetherian ring, and lying-over for integral extensions. The lifting and perfect-pairing steps are proved explicitly.
- **Computational verification actually run:** Exact closure of the two lifted matrices has 48 elements with 48 distinct invertible reductions. The word-length counts are 1, 2, 4, 7, 12, 18, 4 for lengths 0 through 6. The complete finite algorithm is retained in the solution.
- **Notation clarification:** $\lambda$ is the contraction to the ring of integers; residual equivalence is understood over a common algebraic closure of the residue fields.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
